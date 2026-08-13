# `iotfleetwiseCampaign` Submodule <a name="`iotfleetwiseCampaign` Submodule" id="@cdktn/provider-awscc.iotfleetwiseCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseCampaign <a name="IotfleetwiseCampaign" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign awscc_iotfleetwise_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaign(Construct Scope, string Id, IotfleetwiseCampaignConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig">IotfleetwiseCampaignConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig">IotfleetwiseCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme">PutCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs">PutDataDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions">PutDataPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect">PutSignalsToCollect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch">PutSignalsToFetch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataDestinationConfigs">ResetDataDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataExtraDimensions">ResetDataExtraDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataPartitions">ResetDataPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDiagnosticsMode">ResetDiagnosticsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetExpiryTime">ResetExpiryTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPostTriggerCollectionDuration">ResetPostTriggerCollectionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToCollect">ResetSignalsToCollect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToFetch">ResetSignalsToFetch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSpoolingMode">ResetSpoolingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCollectionScheme` <a name="PutCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme"></a>

```csharp
private void PutCollectionScheme(IotfleetwiseCampaignCollectionScheme Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---

##### `PutDataDestinationConfigs` <a name="PutDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs"></a>

```csharp
private void PutDataDestinationConfigs(IResolvable|IotfleetwiseCampaignDataDestinationConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]

---

##### `PutDataPartitions` <a name="PutDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions"></a>

```csharp
private void PutDataPartitions(IResolvable|IotfleetwiseCampaignDataPartitions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]

---

##### `PutSignalsToCollect` <a name="PutSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect"></a>

```csharp
private void PutSignalsToCollect(IResolvable|IotfleetwiseCampaignSignalsToCollect[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]

---

##### `PutSignalsToFetch` <a name="PutSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch"></a>

```csharp
private void PutSignalsToFetch(IResolvable|IotfleetwiseCampaignSignalsToFetch[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags"></a>

```csharp
private void PutTags(IResolvable|IotfleetwiseCampaignTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetDataDestinationConfigs` <a name="ResetDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataDestinationConfigs"></a>

```csharp
private void ResetDataDestinationConfigs()
```

##### `ResetDataExtraDimensions` <a name="ResetDataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataExtraDimensions"></a>

```csharp
private void ResetDataExtraDimensions()
```

##### `ResetDataPartitions` <a name="ResetDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataPartitions"></a>

```csharp
private void ResetDataPartitions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiagnosticsMode` <a name="ResetDiagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDiagnosticsMode"></a>

```csharp
private void ResetDiagnosticsMode()
```

##### `ResetExpiryTime` <a name="ResetExpiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetExpiryTime"></a>

```csharp
private void ResetExpiryTime()
```

##### `ResetPostTriggerCollectionDuration` <a name="ResetPostTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPostTriggerCollectionDuration"></a>

```csharp
private void ResetPostTriggerCollectionDuration()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetSignalsToCollect` <a name="ResetSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToCollect"></a>

```csharp
private void ResetSignalsToCollect()
```

##### `ResetSignalsToFetch` <a name="ResetSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToFetch"></a>

```csharp
private void ResetSignalsToFetch()
```

##### `ResetSpoolingMode` <a name="ResetSpoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSpoolingMode"></a>

```csharp
private void ResetSpoolingMode()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseCampaign.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseCampaign.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseCampaign.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseCampaign.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotfleetwiseCampaign to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotfleetwiseCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionScheme">CollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigs">DataDestinationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList">IotfleetwiseCampaignDataDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitions">DataPartitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList">IotfleetwiseCampaignDataPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lastModificationTime">LastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollect">SignalsToCollect</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList">IotfleetwiseCampaignSignalsToCollectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetch">SignalsToFetch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList">IotfleetwiseCampaignSignalsToFetchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList">IotfleetwiseCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionSchemeInput">CollectionSchemeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigsInput">DataDestinationConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensionsInput">DataExtraDimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitionsInput">DataPartitionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsModeInput">DiagnosticsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTimeInput">ExpiryTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDurationInput">PostTriggerCollectionDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArnInput">SignalCatalogArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollectInput">SignalsToCollectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetchInput">SignalsToFetchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingModeInput">SpoolingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArnInput">TargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensions">DataExtraDimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsMode">DiagnosticsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTime">ExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDuration">PostTriggerCollectionDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArn">SignalCatalogArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingMode">SpoolingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CollectionScheme`<sup>Required</sup> <a name="CollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionScheme"></a>

```csharp
public IotfleetwiseCampaignCollectionSchemeOutputReference CollectionScheme { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DataDestinationConfigs`<sup>Required</sup> <a name="DataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigs"></a>

```csharp
public IotfleetwiseCampaignDataDestinationConfigsList DataDestinationConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList">IotfleetwiseCampaignDataDestinationConfigsList</a>

---

##### `DataPartitions`<sup>Required</sup> <a name="DataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitions"></a>

```csharp
public IotfleetwiseCampaignDataPartitionsList DataPartitions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList">IotfleetwiseCampaignDataPartitionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lastModificationTime"></a>

```csharp
public string LastModificationTime { get; }
```

- *Type:* string

---

##### `SignalsToCollect`<sup>Required</sup> <a name="SignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollect"></a>

```csharp
public IotfleetwiseCampaignSignalsToCollectList SignalsToCollect { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList">IotfleetwiseCampaignSignalsToCollectList</a>

---

##### `SignalsToFetch`<sup>Required</sup> <a name="SignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetch"></a>

```csharp
public IotfleetwiseCampaignSignalsToFetchList SignalsToFetch { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList">IotfleetwiseCampaignSignalsToFetchList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tags"></a>

```csharp
public IotfleetwiseCampaignTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList">IotfleetwiseCampaignTagsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `CollectionSchemeInput`<sup>Optional</sup> <a name="CollectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionSchemeInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignCollectionScheme CollectionSchemeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `DataDestinationConfigsInput`<sup>Optional</sup> <a name="DataDestinationConfigsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigsInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataDestinationConfigs[] DataDestinationConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]

---

##### `DataExtraDimensionsInput`<sup>Optional</sup> <a name="DataExtraDimensionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensionsInput"></a>

```csharp
public string[] DataExtraDimensionsInput { get; }
```

- *Type:* string[]

---

##### `DataPartitionsInput`<sup>Optional</sup> <a name="DataPartitionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitionsInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitions[] DataPartitionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiagnosticsModeInput`<sup>Optional</sup> <a name="DiagnosticsModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsModeInput"></a>

```csharp
public string DiagnosticsModeInput { get; }
```

- *Type:* string

---

##### `ExpiryTimeInput`<sup>Optional</sup> <a name="ExpiryTimeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTimeInput"></a>

```csharp
public string ExpiryTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PostTriggerCollectionDurationInput`<sup>Optional</sup> <a name="PostTriggerCollectionDurationInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDurationInput"></a>

```csharp
public double PostTriggerCollectionDurationInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `SignalCatalogArnInput`<sup>Optional</sup> <a name="SignalCatalogArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArnInput"></a>

```csharp
public string SignalCatalogArnInput { get; }
```

- *Type:* string

---

##### `SignalsToCollectInput`<sup>Optional</sup> <a name="SignalsToCollectInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollectInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToCollect[] SignalsToCollectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]

---

##### `SignalsToFetchInput`<sup>Optional</sup> <a name="SignalsToFetchInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetchInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToFetch[] SignalsToFetchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]

---

##### `SpoolingModeInput`<sup>Optional</sup> <a name="SpoolingModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingModeInput"></a>

```csharp
public string SpoolingModeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tagsInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArnInput"></a>

```csharp
public string TargetArnInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `DataExtraDimensions`<sup>Required</sup> <a name="DataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensions"></a>

```csharp
public string[] DataExtraDimensions { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiagnosticsMode`<sup>Required</sup> <a name="DiagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsMode"></a>

```csharp
public string DiagnosticsMode { get; }
```

- *Type:* string

---

##### `ExpiryTime`<sup>Required</sup> <a name="ExpiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTime"></a>

```csharp
public string ExpiryTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PostTriggerCollectionDuration`<sup>Required</sup> <a name="PostTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDuration"></a>

```csharp
public double PostTriggerCollectionDuration { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `SignalCatalogArn`<sup>Required</sup> <a name="SignalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArn"></a>

```csharp
public string SignalCatalogArn { get; }
```

- *Type:* string

---

##### `SpoolingMode`<sup>Required</sup> <a name="SpoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingMode"></a>

```csharp
public string SpoolingMode { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseCampaignCollectionScheme <a name="IotfleetwiseCampaignCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignCollectionScheme {
    IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme ConditionBasedCollectionScheme = null,
    IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme TimeBasedCollectionScheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.conditionBasedCollectionScheme">ConditionBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.timeBasedCollectionScheme">TimeBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}. |

---

##### `ConditionBasedCollectionScheme`<sup>Optional</sup> <a name="ConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.conditionBasedCollectionScheme"></a>

```csharp
public IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme ConditionBasedCollectionScheme { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}.

---

##### `TimeBasedCollectionScheme`<sup>Optional</sup> <a name="TimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.timeBasedCollectionScheme"></a>

```csharp
public IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme TimeBasedCollectionScheme { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}.

---

### IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme <a name="IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme {
    double ConditionLanguageVersion = null,
    string Expression = null,
    double MinimumTriggerIntervalMs = null,
    string TriggerMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.minimumTriggerIntervalMs">MinimumTriggerIntervalMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.triggerMode">TriggerMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}. |

---

##### `ConditionLanguageVersion`<sup>Optional</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.conditionLanguageVersion"></a>

```csharp
public double ConditionLanguageVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

##### `MinimumTriggerIntervalMs`<sup>Optional</sup> <a name="MinimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.minimumTriggerIntervalMs"></a>

```csharp
public double MinimumTriggerIntervalMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}.

---

##### `TriggerMode`<sup>Optional</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.triggerMode"></a>

```csharp
public string TriggerMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

### IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme <a name="IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme {
    double PeriodMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.property.periodMs">PeriodMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}. |

---

##### `PeriodMs`<sup>Optional</sup> <a name="PeriodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.property.periodMs"></a>

```csharp
public double PeriodMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}.

---

### IotfleetwiseCampaignConfig <a name="IotfleetwiseCampaignConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IotfleetwiseCampaignCollectionScheme CollectionScheme,
    string Name,
    string SignalCatalogArn,
    string TargetArn,
    string Action = null,
    string Compression = null,
    IResolvable|IotfleetwiseCampaignDataDestinationConfigs[] DataDestinationConfigs = null,
    string[] DataExtraDimensions = null,
    IResolvable|IotfleetwiseCampaignDataPartitions[] DataPartitions = null,
    string Description = null,
    string DiagnosticsMode = null,
    string ExpiryTime = null,
    double PostTriggerCollectionDuration = null,
    double Priority = null,
    IResolvable|IotfleetwiseCampaignSignalsToCollect[] SignalsToCollect = null,
    IResolvable|IotfleetwiseCampaignSignalsToFetch[] SignalsToFetch = null,
    string SpoolingMode = null,
    string StartTime = null,
    IResolvable|IotfleetwiseCampaignTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.collectionScheme">CollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalCatalogArn">SignalCatalogArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.targetArn">TargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.compression">Compression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataDestinationConfigs">DataDestinationConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataExtraDimensions">DataExtraDimensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataPartitions">DataPartitions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.diagnosticsMode">DiagnosticsMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.expiryTime">ExpiryTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.postTriggerCollectionDuration">PostTriggerCollectionDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToCollect">SignalsToCollect</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToFetch">SignalsToFetch</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.spoolingMode">SpoolingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CollectionScheme`<sup>Required</sup> <a name="CollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.collectionScheme"></a>

```csharp
public IotfleetwiseCampaignCollectionScheme CollectionScheme { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

##### `SignalCatalogArn`<sup>Required</sup> <a name="SignalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalCatalogArn"></a>

```csharp
public string SignalCatalogArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}.

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.targetArn"></a>

```csharp
public string TargetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}.

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}.

---

##### `DataDestinationConfigs`<sup>Optional</sup> <a name="DataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataDestinationConfigs"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataDestinationConfigs[] DataDestinationConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}.

---

##### `DataExtraDimensions`<sup>Optional</sup> <a name="DataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataExtraDimensions"></a>

```csharp
public string[] DataExtraDimensions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}.

---

##### `DataPartitions`<sup>Optional</sup> <a name="DataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataPartitions"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitions[] DataPartitions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}.

---

##### `DiagnosticsMode`<sup>Optional</sup> <a name="DiagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.diagnosticsMode"></a>

```csharp
public string DiagnosticsMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}.

---

##### `ExpiryTime`<sup>Optional</sup> <a name="ExpiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.expiryTime"></a>

```csharp
public string ExpiryTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}.

---

##### `PostTriggerCollectionDuration`<sup>Optional</sup> <a name="PostTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.postTriggerCollectionDuration"></a>

```csharp
public double PostTriggerCollectionDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}.

---

##### `SignalsToCollect`<sup>Optional</sup> <a name="SignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToCollect"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToCollect[] SignalsToCollect { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}.

---

##### `SignalsToFetch`<sup>Optional</sup> <a name="SignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToFetch"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToFetch[] SignalsToFetch { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}.

---

##### `SpoolingMode`<sup>Optional</sup> <a name="SpoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.spoolingMode"></a>

```csharp
public string SpoolingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.tags"></a>

```csharp
public IResolvable|IotfleetwiseCampaignTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}.

---

### IotfleetwiseCampaignDataDestinationConfigs <a name="IotfleetwiseCampaignDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataDestinationConfigs {
    IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig MqttTopicConfig = null,
    IotfleetwiseCampaignDataDestinationConfigsS3Config S3Config = null,
    IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig TimestreamConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.mqttTopicConfig">MqttTopicConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.timestreamConfig">TimestreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}. |

---

##### `MqttTopicConfig`<sup>Optional</sup> <a name="MqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.mqttTopicConfig"></a>

```csharp
public IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig MqttTopicConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}.

---

##### `S3Config`<sup>Optional</sup> <a name="S3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.s3Config"></a>

```csharp
public IotfleetwiseCampaignDataDestinationConfigsS3Config S3Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}.

---

##### `TimestreamConfig`<sup>Optional</sup> <a name="TimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.timestreamConfig"></a>

```csharp
public IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig TimestreamConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}.

---

### IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig <a name="IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig {
    string ExecutionRoleArn = null,
    string MqttTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.mqttTopicArn">MqttTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}. |

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

##### `MqttTopicArn`<sup>Optional</sup> <a name="MqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.mqttTopicArn"></a>

```csharp
public string MqttTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}.

---

### IotfleetwiseCampaignDataDestinationConfigsS3Config <a name="IotfleetwiseCampaignDataDestinationConfigsS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataDestinationConfigsS3Config {
    string BucketArn = null,
    string DataFormat = null,
    string Prefix = null,
    string StorageCompressionFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.bucketArn">BucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.dataFormat">DataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.storageCompressionFormat">StorageCompressionFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}.

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.dataFormat"></a>

```csharp
public string DataFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}.

---

##### `StorageCompressionFormat`<sup>Optional</sup> <a name="StorageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.storageCompressionFormat"></a>

```csharp
public string StorageCompressionFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}.

---

### IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig <a name="IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig {
    string ExecutionRoleArn = null,
    string TimestreamTableArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.timestreamTableArn">TimestreamTableArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}. |

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

##### `TimestreamTableArn`<sup>Optional</sup> <a name="TimestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.timestreamTableArn"></a>

```csharp
public string TimestreamTableArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}.

---

### IotfleetwiseCampaignDataPartitions <a name="IotfleetwiseCampaignDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitions {
    string Id = null,
    IotfleetwiseCampaignDataPartitionsStorageOptions StorageOptions = null,
    IotfleetwiseCampaignDataPartitionsUploadOptions UploadOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.storageOptions">StorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.uploadOptions">UploadOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageOptions`<sup>Optional</sup> <a name="StorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.storageOptions"></a>

```csharp
public IotfleetwiseCampaignDataPartitionsStorageOptions StorageOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}.

---

##### `UploadOptions`<sup>Optional</sup> <a name="UploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.uploadOptions"></a>

```csharp
public IotfleetwiseCampaignDataPartitionsUploadOptions UploadOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptions <a name="IotfleetwiseCampaignDataPartitionsStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitionsStorageOptions {
    IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize MaximumSize = null,
    IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive MinimumTimeToLive = null,
    string StorageLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.maximumSize">MaximumSize</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.minimumTimeToLive">MinimumTimeToLive</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.storageLocation">StorageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}. |

---

##### `MaximumSize`<sup>Optional</sup> <a name="MaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.maximumSize"></a>

```csharp
public IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize MaximumSize { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}.

---

##### `MinimumTimeToLive`<sup>Optional</sup> <a name="MinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.minimumTimeToLive"></a>

```csharp
public IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive MinimumTimeToLive { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.storageLocation"></a>

```csharp
public string StorageLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize {
    string Unit = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive {
    string Unit = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

### IotfleetwiseCampaignDataPartitionsUploadOptions <a name="IotfleetwiseCampaignDataPartitionsUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitionsUploadOptions {
    double ConditionLanguageVersion = null,
    string Expression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}. |

---

##### `ConditionLanguageVersion`<sup>Optional</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.conditionLanguageVersion"></a>

```csharp
public double ConditionLanguageVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

### IotfleetwiseCampaignSignalsToCollect <a name="IotfleetwiseCampaignSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToCollect {
    string DataPartitionId = null,
    double MaxSampleCount = null,
    double MinimumSamplingIntervalMs = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.dataPartitionId">DataPartitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.maxSampleCount">MaxSampleCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.minimumSamplingIntervalMs">MinimumSamplingIntervalMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |

---

##### `DataPartitionId`<sup>Optional</sup> <a name="DataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.dataPartitionId"></a>

```csharp
public string DataPartitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}.

---

##### `MaxSampleCount`<sup>Optional</sup> <a name="MaxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.maxSampleCount"></a>

```csharp
public double MaxSampleCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}.

---

##### `MinimumSamplingIntervalMs`<sup>Optional</sup> <a name="MinimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.minimumSamplingIntervalMs"></a>

```csharp
public double MinimumSamplingIntervalMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

### IotfleetwiseCampaignSignalsToFetch <a name="IotfleetwiseCampaignSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToFetch {
    string[] Actions = null,
    double ConditionLanguageVersion = null,
    string FullyQualifiedName = null,
    IotfleetwiseCampaignSignalsToFetchSignalFetchConfig SignalFetchConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.actions">Actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.signalFetchConfig">SignalFetchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}.

---

##### `ConditionLanguageVersion`<sup>Optional</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.conditionLanguageVersion"></a>

```csharp
public double ConditionLanguageVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}.

---

##### `SignalFetchConfig`<sup>Optional</sup> <a name="SignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.signalFetchConfig"></a>

```csharp
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfig SignalFetchConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfig <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToFetchSignalFetchConfig {
    IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased ConditionBased = null,
    IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased TimeBased = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.conditionBased">ConditionBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.timeBased">TimeBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}. |

---

##### `ConditionBased`<sup>Optional</sup> <a name="ConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.conditionBased"></a>

```csharp
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased ConditionBased { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}.

---

##### `TimeBased`<sup>Optional</sup> <a name="TimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.timeBased"></a>

```csharp
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased TimeBased { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased {
    string ConditionExpression = null,
    string TriggerMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.conditionExpression">ConditionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.triggerMode">TriggerMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}. |

---

##### `ConditionExpression`<sup>Optional</sup> <a name="ConditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.conditionExpression"></a>

```csharp
public string ConditionExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}.

---

##### `TriggerMode`<sup>Optional</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.triggerMode"></a>

```csharp
public string TriggerMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased {
    double ExecutionFrequencyMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.property.executionFrequencyMs">ExecutionFrequencyMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}. |

---

##### `ExecutionFrequencyMs`<sup>Optional</sup> <a name="ExecutionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.property.executionFrequencyMs"></a>

```csharp
public double ExecutionFrequencyMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}.

---

### IotfleetwiseCampaignTags <a name="IotfleetwiseCampaignTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetConditionLanguageVersion">ResetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetMinimumTriggerIntervalMs">ResetMinimumTriggerIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetTriggerMode">ResetTriggerMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionLanguageVersion` <a name="ResetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetConditionLanguageVersion"></a>

```csharp
private void ResetConditionLanguageVersion()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetMinimumTriggerIntervalMs` <a name="ResetMinimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetMinimumTriggerIntervalMs"></a>

```csharp
private void ResetMinimumTriggerIntervalMs()
```

##### `ResetTriggerMode` <a name="ResetTriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetTriggerMode"></a>

```csharp
private void ResetTriggerMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersionInput">ConditionLanguageVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMsInput">MinimumTriggerIntervalMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerModeInput">TriggerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs">MinimumTriggerIntervalMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode">TriggerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionLanguageVersionInput`<sup>Optional</sup> <a name="ConditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersionInput"></a>

```csharp
public double ConditionLanguageVersionInput { get; }
```

- *Type:* double

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `MinimumTriggerIntervalMsInput`<sup>Optional</sup> <a name="MinimumTriggerIntervalMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMsInput"></a>

```csharp
public double MinimumTriggerIntervalMsInput { get; }
```

- *Type:* double

---

##### `TriggerModeInput`<sup>Optional</sup> <a name="TriggerModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerModeInput"></a>

```csharp
public string TriggerModeInput { get; }
```

- *Type:* string

---

##### `ConditionLanguageVersion`<sup>Required</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion"></a>

```csharp
public double ConditionLanguageVersion { get; }
```

- *Type:* double

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `MinimumTriggerIntervalMs`<sup>Required</sup> <a name="MinimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs"></a>

```csharp
public double MinimumTriggerIntervalMs { get; }
```

- *Type:* double

---

##### `TriggerMode`<sup>Required</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode"></a>

```csharp
public string TriggerMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---


### IotfleetwiseCampaignCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignCollectionSchemeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme">PutConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme">PutTimeBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetConditionBasedCollectionScheme">ResetConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetTimeBasedCollectionScheme">ResetTimeBasedCollectionScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionBasedCollectionScheme` <a name="PutConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme"></a>

```csharp
private void PutConditionBasedCollectionScheme(IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---

##### `PutTimeBasedCollectionScheme` <a name="PutTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme"></a>

```csharp
private void PutTimeBasedCollectionScheme(IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---

##### `ResetConditionBasedCollectionScheme` <a name="ResetConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetConditionBasedCollectionScheme"></a>

```csharp
private void ResetConditionBasedCollectionScheme()
```

##### `ResetTimeBasedCollectionScheme` <a name="ResetTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetTimeBasedCollectionScheme"></a>

```csharp
private void ResetTimeBasedCollectionScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme">ConditionBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme">TimeBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionSchemeInput">ConditionBasedCollectionSchemeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionSchemeInput">TimeBasedCollectionSchemeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionBasedCollectionScheme`<sup>Required</sup> <a name="ConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme"></a>

```csharp
public IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference ConditionBasedCollectionScheme { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a>

---

##### `TimeBasedCollectionScheme`<sup>Required</sup> <a name="TimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme"></a>

```csharp
public IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference TimeBasedCollectionScheme { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a>

---

##### `ConditionBasedCollectionSchemeInput`<sup>Optional</sup> <a name="ConditionBasedCollectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionSchemeInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme ConditionBasedCollectionSchemeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---

##### `TimeBasedCollectionSchemeInput`<sup>Optional</sup> <a name="TimeBasedCollectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionSchemeInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme TimeBasedCollectionSchemeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignCollectionScheme InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---


### IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resetPeriodMs">ResetPeriodMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriodMs` <a name="ResetPeriodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resetPeriodMs"></a>

```csharp
private void ResetPeriodMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMsInput">PeriodMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs">PeriodMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodMsInput`<sup>Optional</sup> <a name="PeriodMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMsInput"></a>

```csharp
public double PeriodMsInput { get; }
```

- *Type:* double

---

##### `PeriodMs`<sup>Required</sup> <a name="PeriodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs"></a>

```csharp
public double PeriodMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---


### IotfleetwiseCampaignDataDestinationConfigsList <a name="IotfleetwiseCampaignDataDestinationConfigsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataDestinationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get"></a>

```csharp
private IotfleetwiseCampaignDataDestinationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataDestinationConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>[]

---


### IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetMqttTopicArn">ResetMqttTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetMqttTopicArn` <a name="ResetMqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetMqttTopicArn"></a>

```csharp
private void ResetMqttTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArnInput">MqttTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn">MqttTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `MqttTopicArnInput`<sup>Optional</sup> <a name="MqttTopicArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArnInput"></a>

```csharp
public string MqttTopicArnInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `MqttTopicArn`<sup>Required</sup> <a name="MqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn"></a>

```csharp
public string MqttTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---


### IotfleetwiseCampaignDataDestinationConfigsOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataDestinationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig">PutMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config">PutS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig">PutTimestreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetMqttTopicConfig">ResetMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetS3Config">ResetS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetTimestreamConfig">ResetTimestreamConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMqttTopicConfig` <a name="PutMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig"></a>

```csharp
private void PutMqttTopicConfig(IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---

##### `PutS3Config` <a name="PutS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config"></a>

```csharp
private void PutS3Config(IotfleetwiseCampaignDataDestinationConfigsS3Config Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---

##### `PutTimestreamConfig` <a name="PutTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig"></a>

```csharp
private void PutTimestreamConfig(IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---

##### `ResetMqttTopicConfig` <a name="ResetMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetMqttTopicConfig"></a>

```csharp
private void ResetMqttTopicConfig()
```

##### `ResetS3Config` <a name="ResetS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetS3Config"></a>

```csharp
private void ResetS3Config()
```

##### `ResetTimestreamConfig` <a name="ResetTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetTimestreamConfig"></a>

```csharp
private void ResetTimestreamConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig">MqttTopicConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig">TimestreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfigInput">MqttTopicConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3ConfigInput">S3ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfigInput">TimestreamConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MqttTopicConfig`<sup>Required</sup> <a name="MqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig"></a>

```csharp
public IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference MqttTopicConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a>

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config"></a>

```csharp
public IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference S3Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a>

---

##### `TimestreamConfig`<sup>Required</sup> <a name="TimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig"></a>

```csharp
public IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference TimestreamConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a>

---

##### `MqttTopicConfigInput`<sup>Optional</sup> <a name="MqttTopicConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfigInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig MqttTopicConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---

##### `S3ConfigInput`<sup>Optional</sup> <a name="S3ConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3ConfigInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsS3Config S3ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---

##### `TimestreamConfigInput`<sup>Optional</sup> <a name="TimestreamConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfigInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig TimestreamConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataDestinationConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>

---


### IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetStorageCompressionFormat">ResetStorageCompressionFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetBucketArn"></a>

```csharp
private void ResetBucketArn()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetDataFormat"></a>

```csharp
private void ResetDataFormat()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetStorageCompressionFormat` <a name="ResetStorageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetStorageCompressionFormat"></a>

```csharp
private void ResetStorageCompressionFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormatInput">DataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormatInput">StorageCompressionFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat">DataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat">StorageCompressionFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormatInput"></a>

```csharp
public string DataFormatInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `StorageCompressionFormatInput`<sup>Optional</sup> <a name="StorageCompressionFormatInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormatInput"></a>

```csharp
public string StorageCompressionFormatInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat"></a>

```csharp
public string DataFormat { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `StorageCompressionFormat`<sup>Required</sup> <a name="StorageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat"></a>

```csharp
public string StorageCompressionFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsS3Config InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---


### IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetTimestreamTableArn">ResetTimestreamTableArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetTimestreamTableArn` <a name="ResetTimestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetTimestreamTableArn"></a>

```csharp
private void ResetTimestreamTableArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArnInput">TimestreamTableArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn">TimestreamTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `TimestreamTableArnInput`<sup>Optional</sup> <a name="TimestreamTableArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArnInput"></a>

```csharp
public string TimestreamTableArnInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `TimestreamTableArn`<sup>Required</sup> <a name="TimestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn"></a>

```csharp
public string TimestreamTableArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---


### IotfleetwiseCampaignDataPartitionsList <a name="IotfleetwiseCampaignDataPartitionsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get"></a>

```csharp
private IotfleetwiseCampaignDataPartitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>[]

---


### IotfleetwiseCampaignDataPartitionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions">PutStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions">PutUploadOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetStorageOptions">ResetStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetUploadOptions">ResetUploadOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageOptions` <a name="PutStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions"></a>

```csharp
private void PutStorageOptions(IotfleetwiseCampaignDataPartitionsStorageOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---

##### `PutUploadOptions` <a name="PutUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions"></a>

```csharp
private void PutUploadOptions(IotfleetwiseCampaignDataPartitionsUploadOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStorageOptions` <a name="ResetStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetStorageOptions"></a>

```csharp
private void ResetStorageOptions()
```

##### `ResetUploadOptions` <a name="ResetUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetUploadOptions"></a>

```csharp
private void ResetUploadOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions">StorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions">UploadOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptionsInput">StorageOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptionsInput">UploadOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageOptions`<sup>Required</sup> <a name="StorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions"></a>

```csharp
public IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference StorageOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a>

---

##### `UploadOptions`<sup>Required</sup> <a name="UploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions"></a>

```csharp
public IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference UploadOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StorageOptionsInput`<sup>Optional</sup> <a name="StorageOptionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptionsInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptions StorageOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---

##### `UploadOptionsInput`<sup>Optional</sup> <a name="UploadOptionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptionsInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitionsUploadOptions UploadOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize">PutMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive">PutMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMaximumSize">ResetMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMinimumTimeToLive">ResetMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaximumSize` <a name="PutMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize"></a>

```csharp
private void PutMaximumSize(IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---

##### `PutMinimumTimeToLive` <a name="PutMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive"></a>

```csharp
private void PutMinimumTimeToLive(IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---

##### `ResetMaximumSize` <a name="ResetMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMaximumSize"></a>

```csharp
private void ResetMaximumSize()
```

##### `ResetMinimumTimeToLive` <a name="ResetMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMinimumTimeToLive"></a>

```csharp
private void ResetMinimumTimeToLive()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetStorageLocation"></a>

```csharp
private void ResetStorageLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize">MaximumSize</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive">MinimumTimeToLive</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSizeInput">MaximumSizeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLiveInput">MinimumTimeToLiveInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocationInput">StorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation">StorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumSize`<sup>Required</sup> <a name="MaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize"></a>

```csharp
public IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference MaximumSize { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a>

---

##### `MinimumTimeToLive`<sup>Required</sup> <a name="MinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive"></a>

```csharp
public IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference MinimumTimeToLive { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a>

---

##### `MaximumSizeInput`<sup>Optional</sup> <a name="MaximumSizeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSizeInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize MaximumSizeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---

##### `MinimumTimeToLiveInput`<sup>Optional</sup> <a name="MinimumTimeToLiveInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLiveInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive MinimumTimeToLiveInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocationInput"></a>

```csharp
public string StorageLocationInput { get; }
```

- *Type:* string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation"></a>

```csharp
public string StorageLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---


### IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetConditionLanguageVersion">ResetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionLanguageVersion` <a name="ResetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetConditionLanguageVersion"></a>

```csharp
private void ResetConditionLanguageVersion()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersionInput">ConditionLanguageVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionLanguageVersionInput`<sup>Optional</sup> <a name="ConditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersionInput"></a>

```csharp
public double ConditionLanguageVersionInput { get; }
```

- *Type:* double

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `ConditionLanguageVersion`<sup>Required</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion"></a>

```csharp
public double ConditionLanguageVersion { get; }
```

- *Type:* double

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignDataPartitionsUploadOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---


### IotfleetwiseCampaignSignalsToCollectList <a name="IotfleetwiseCampaignSignalsToCollectList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToCollectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get"></a>

```csharp
private IotfleetwiseCampaignSignalsToCollectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToCollect[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>[]

---


### IotfleetwiseCampaignSignalsToCollectOutputReference <a name="IotfleetwiseCampaignSignalsToCollectOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToCollectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetDataPartitionId">ResetDataPartitionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMaxSampleCount">ResetMaxSampleCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMinimumSamplingIntervalMs">ResetMinimumSamplingIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataPartitionId` <a name="ResetDataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetDataPartitionId"></a>

```csharp
private void ResetDataPartitionId()
```

##### `ResetMaxSampleCount` <a name="ResetMaxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMaxSampleCount"></a>

```csharp
private void ResetMaxSampleCount()
```

##### `ResetMinimumSamplingIntervalMs` <a name="ResetMinimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMinimumSamplingIntervalMs"></a>

```csharp
private void ResetMinimumSamplingIntervalMs()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionIdInput">DataPartitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCountInput">MaxSampleCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMsInput">MinimumSamplingIntervalMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId">DataPartitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount">MaxSampleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs">MinimumSamplingIntervalMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataPartitionIdInput`<sup>Optional</sup> <a name="DataPartitionIdInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionIdInput"></a>

```csharp
public string DataPartitionIdInput { get; }
```

- *Type:* string

---

##### `MaxSampleCountInput`<sup>Optional</sup> <a name="MaxSampleCountInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCountInput"></a>

```csharp
public double MaxSampleCountInput { get; }
```

- *Type:* double

---

##### `MinimumSamplingIntervalMsInput`<sup>Optional</sup> <a name="MinimumSamplingIntervalMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMsInput"></a>

```csharp
public double MinimumSamplingIntervalMsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `DataPartitionId`<sup>Required</sup> <a name="DataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId"></a>

```csharp
public string DataPartitionId { get; }
```

- *Type:* string

---

##### `MaxSampleCount`<sup>Required</sup> <a name="MaxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount"></a>

```csharp
public double MaxSampleCount { get; }
```

- *Type:* double

---

##### `MinimumSamplingIntervalMs`<sup>Required</sup> <a name="MinimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs"></a>

```csharp
public double MinimumSamplingIntervalMs { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToCollect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>

---


### IotfleetwiseCampaignSignalsToFetchList <a name="IotfleetwiseCampaignSignalsToFetchList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToFetchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get"></a>

```csharp
private IotfleetwiseCampaignSignalsToFetchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToFetch[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>[]

---


### IotfleetwiseCampaignSignalsToFetchOutputReference <a name="IotfleetwiseCampaignSignalsToFetchOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToFetchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig">PutSignalFetchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetConditionLanguageVersion">ResetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetSignalFetchConfig">ResetSignalFetchConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSignalFetchConfig` <a name="PutSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig"></a>

```csharp
private void PutSignalFetchConfig(IotfleetwiseCampaignSignalsToFetchSignalFetchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetConditionLanguageVersion` <a name="ResetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetConditionLanguageVersion"></a>

```csharp
private void ResetConditionLanguageVersion()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetFullyQualifiedName"></a>

```csharp
private void ResetFullyQualifiedName()
```

##### `ResetSignalFetchConfig` <a name="ResetSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetSignalFetchConfig"></a>

```csharp
private void ResetSignalFetchConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig">SignalFetchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersionInput">ConditionLanguageVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfigInput">SignalFetchConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SignalFetchConfig`<sup>Required</sup> <a name="SignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig"></a>

```csharp
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference SignalFetchConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `ConditionLanguageVersionInput`<sup>Optional</sup> <a name="ConditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersionInput"></a>

```csharp
public double ConditionLanguageVersionInput { get; }
```

- *Type:* double

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedNameInput"></a>

```csharp
public string FullyQualifiedNameInput { get; }
```

- *Type:* string

---

##### `SignalFetchConfigInput`<sup>Optional</sup> <a name="SignalFetchConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfigInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfig SignalFetchConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `ConditionLanguageVersion`<sup>Required</sup> <a name="ConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion"></a>

```csharp
public double ConditionLanguageVersion { get; }
```

- *Type:* double

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToFetch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetConditionExpression">ResetConditionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetTriggerMode">ResetTriggerMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionExpression` <a name="ResetConditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetConditionExpression"></a>

```csharp
private void ResetConditionExpression()
```

##### `ResetTriggerMode` <a name="ResetTriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetTriggerMode"></a>

```csharp
private void ResetTriggerMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpressionInput">ConditionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerModeInput">TriggerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression">ConditionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode">TriggerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionExpressionInput`<sup>Optional</sup> <a name="ConditionExpressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpressionInput"></a>

```csharp
public string ConditionExpressionInput { get; }
```

- *Type:* string

---

##### `TriggerModeInput`<sup>Optional</sup> <a name="TriggerModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerModeInput"></a>

```csharp
public string TriggerModeInput { get; }
```

- *Type:* string

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression"></a>

```csharp
public string ConditionExpression { get; }
```

- *Type:* string

---

##### `TriggerMode`<sup>Required</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode"></a>

```csharp
public string TriggerMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased">PutConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased">PutTimeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetConditionBased">ResetConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetTimeBased">ResetTimeBased</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionBased` <a name="PutConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased"></a>

```csharp
private void PutConditionBased(IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---

##### `PutTimeBased` <a name="PutTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased"></a>

```csharp
private void PutTimeBased(IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---

##### `ResetConditionBased` <a name="ResetConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetConditionBased"></a>

```csharp
private void ResetConditionBased()
```

##### `ResetTimeBased` <a name="ResetTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetTimeBased"></a>

```csharp
private void ResetTimeBased()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased">ConditionBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased">TimeBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBasedInput">ConditionBasedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBasedInput">TimeBasedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionBased`<sup>Required</sup> <a name="ConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased"></a>

```csharp
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference ConditionBased { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a>

---

##### `TimeBased`<sup>Required</sup> <a name="TimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased"></a>

```csharp
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference TimeBased { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a>

---

##### `ConditionBasedInput`<sup>Optional</sup> <a name="ConditionBasedInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBasedInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased ConditionBasedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---

##### `TimeBasedInput`<sup>Optional</sup> <a name="TimeBasedInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBasedInput"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased TimeBasedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resetExecutionFrequencyMs">ResetExecutionFrequencyMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionFrequencyMs` <a name="ResetExecutionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resetExecutionFrequencyMs"></a>

```csharp
private void ResetExecutionFrequencyMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMsInput">ExecutionFrequencyMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs">ExecutionFrequencyMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionFrequencyMsInput`<sup>Optional</sup> <a name="ExecutionFrequencyMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMsInput"></a>

```csharp
public double ExecutionFrequencyMsInput { get; }
```

- *Type:* double

---

##### `ExecutionFrequencyMs`<sup>Required</sup> <a name="ExecutionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs"></a>

```csharp
public double ExecutionFrequencyMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---


### IotfleetwiseCampaignTagsList <a name="IotfleetwiseCampaignTagsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get"></a>

```csharp
private IotfleetwiseCampaignTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>[]

---


### IotfleetwiseCampaignTagsOutputReference <a name="IotfleetwiseCampaignTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseCampaignTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseCampaignTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>

---



