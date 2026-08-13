# `cloudtrailEventDataStore` Submodule <a name="`cloudtrailEventDataStore` Submodule" id="@cdktn/provider-awscc.cloudtrailEventDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailEventDataStore <a name="CloudtrailEventDataStore" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store awscc_cloudtrail_event_data_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStore(Construct Scope, string Id, CloudtrailEventDataStoreConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig">CloudtrailEventDataStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig">CloudtrailEventDataStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelectors">PutAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putContextKeySelectors">PutContextKeySelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putInsightSelectors">PutInsightSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelectors">ResetAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetBillingMode">ResetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetContextKeySelectors">ResetContextKeySelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetFederationEnabled">ResetFederationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetFederationRoleArn">ResetFederationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetIngestionEnabled">ResetIngestionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetInsightsDestination">ResetInsightsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetInsightSelectors">ResetInsightSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMaxEventSize">ResetMaxEventSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled">ResetMultiRegionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled">ResetOrganizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled">ResetTerminationProtectionEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedEventSelectors` <a name="PutAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelectors"></a>

```csharp
private void PutAdvancedEventSelectors(IResolvable|CloudtrailEventDataStoreAdvancedEventSelectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]

---

##### `PutContextKeySelectors` <a name="PutContextKeySelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putContextKeySelectors"></a>

```csharp
private void PutContextKeySelectors(IResolvable|CloudtrailEventDataStoreContextKeySelectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putContextKeySelectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]

---

##### `PutInsightSelectors` <a name="PutInsightSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putInsightSelectors"></a>

```csharp
private void PutInsightSelectors(IResolvable|CloudtrailEventDataStoreInsightSelectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putInsightSelectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putTags"></a>

```csharp
private void PutTags(IResolvable|CloudtrailEventDataStoreTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]

---

##### `ResetAdvancedEventSelectors` <a name="ResetAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelectors"></a>

```csharp
private void ResetAdvancedEventSelectors()
```

##### `ResetBillingMode` <a name="ResetBillingMode" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetBillingMode"></a>

```csharp
private void ResetBillingMode()
```

##### `ResetContextKeySelectors` <a name="ResetContextKeySelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetContextKeySelectors"></a>

```csharp
private void ResetContextKeySelectors()
```

##### `ResetFederationEnabled` <a name="ResetFederationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetFederationEnabled"></a>

```csharp
private void ResetFederationEnabled()
```

##### `ResetFederationRoleArn` <a name="ResetFederationRoleArn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetFederationRoleArn"></a>

```csharp
private void ResetFederationRoleArn()
```

##### `ResetIngestionEnabled` <a name="ResetIngestionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetIngestionEnabled"></a>

```csharp
private void ResetIngestionEnabled()
```

##### `ResetInsightsDestination` <a name="ResetInsightsDestination" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetInsightsDestination"></a>

```csharp
private void ResetInsightsDestination()
```

##### `ResetInsightSelectors` <a name="ResetInsightSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetInsightSelectors"></a>

```csharp
private void ResetInsightSelectors()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMaxEventSize` <a name="ResetMaxEventSize" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMaxEventSize"></a>

```csharp
private void ResetMaxEventSize()
```

##### `ResetMultiRegionEnabled` <a name="ResetMultiRegionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled"></a>

```csharp
private void ResetMultiRegionEnabled()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrganizationEnabled` <a name="ResetOrganizationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled"></a>

```csharp
private void ResetOrganizationEnabled()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod"></a>

```csharp
private void ResetRetentionPeriod()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTerminationProtectionEnabled` <a name="ResetTerminationProtectionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled"></a>

```csharp
private void ResetTerminationProtectionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudtrailEventDataStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudtrailEventDataStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudtrailEventDataStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudtrailEventDataStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudtrailEventDataStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudtrailEventDataStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudtrailEventDataStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudtrailEventDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudtrailEventDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectors">AdvancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList">CloudtrailEventDataStoreAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.contextKeySelectors">ContextKeySelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList">CloudtrailEventDataStoreContextKeySelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.eventDataStoreArn">EventDataStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightSelectors">InsightSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList">CloudtrailEventDataStoreInsightSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList">CloudtrailEventDataStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorsInput">AdvancedEventSelectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingModeInput">BillingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.contextKeySelectorsInput">ContextKeySelectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationEnabledInput">FederationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationRoleArnInput">FederationRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.ingestionEnabledInput">IngestionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightsDestinationInput">InsightsDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightSelectorsInput">InsightSelectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.maxEventSizeInput">MaxEventSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput">MultiRegionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput">OrganizationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput">TerminationProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingMode">BillingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationEnabled">FederationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationRoleArn">FederationRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.ingestionEnabled">IngestionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightsDestination">InsightsDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.maxEventSize">MaxEventSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled">MultiRegionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled">OrganizationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdvancedEventSelectors`<sup>Required</sup> <a name="AdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectors"></a>

```csharp
public CloudtrailEventDataStoreAdvancedEventSelectorsList AdvancedEventSelectors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList">CloudtrailEventDataStoreAdvancedEventSelectorsList</a>

---

##### `ContextKeySelectors`<sup>Required</sup> <a name="ContextKeySelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.contextKeySelectors"></a>

```csharp
public CloudtrailEventDataStoreContextKeySelectorsList ContextKeySelectors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList">CloudtrailEventDataStoreContextKeySelectorsList</a>

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `EventDataStoreArn`<sup>Required</sup> <a name="EventDataStoreArn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.eventDataStoreArn"></a>

```csharp
public string EventDataStoreArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InsightSelectors`<sup>Required</sup> <a name="InsightSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightSelectors"></a>

```csharp
public CloudtrailEventDataStoreInsightSelectorsList InsightSelectors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList">CloudtrailEventDataStoreInsightSelectorsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags"></a>

```csharp
public CloudtrailEventDataStoreTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList">CloudtrailEventDataStoreTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.updatedTimestamp"></a>

```csharp
public string UpdatedTimestamp { get; }
```

- *Type:* string

---

##### `AdvancedEventSelectorsInput`<sup>Optional</sup> <a name="AdvancedEventSelectorsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorsInput"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreAdvancedEventSelectors[] AdvancedEventSelectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]

---

##### `BillingModeInput`<sup>Optional</sup> <a name="BillingModeInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingModeInput"></a>

```csharp
public string BillingModeInput { get; }
```

- *Type:* string

---

##### `ContextKeySelectorsInput`<sup>Optional</sup> <a name="ContextKeySelectorsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.contextKeySelectorsInput"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreContextKeySelectors[] ContextKeySelectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]

---

##### `FederationEnabledInput`<sup>Optional</sup> <a name="FederationEnabledInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationEnabledInput"></a>

```csharp
public bool|IResolvable FederationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FederationRoleArnInput`<sup>Optional</sup> <a name="FederationRoleArnInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationRoleArnInput"></a>

```csharp
public string FederationRoleArnInput { get; }
```

- *Type:* string

---

##### `IngestionEnabledInput`<sup>Optional</sup> <a name="IngestionEnabledInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.ingestionEnabledInput"></a>

```csharp
public bool|IResolvable IngestionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InsightsDestinationInput`<sup>Optional</sup> <a name="InsightsDestinationInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightsDestinationInput"></a>

```csharp
public string InsightsDestinationInput { get; }
```

- *Type:* string

---

##### `InsightSelectorsInput`<sup>Optional</sup> <a name="InsightSelectorsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightSelectorsInput"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreInsightSelectors[] InsightSelectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MaxEventSizeInput`<sup>Optional</sup> <a name="MaxEventSizeInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.maxEventSizeInput"></a>

```csharp
public string MaxEventSizeInput { get; }
```

- *Type:* string

---

##### `MultiRegionEnabledInput`<sup>Optional</sup> <a name="MultiRegionEnabledInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput"></a>

```csharp
public bool|IResolvable MultiRegionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrganizationEnabledInput`<sup>Optional</sup> <a name="OrganizationEnabledInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput"></a>

```csharp
public bool|IResolvable OrganizationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput"></a>

```csharp
public double RetentionPeriodInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]

---

##### `TerminationProtectionEnabledInput`<sup>Optional</sup> <a name="TerminationProtectionEnabledInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput"></a>

```csharp
public bool|IResolvable TerminationProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingMode"></a>

```csharp
public string BillingMode { get; }
```

- *Type:* string

---

##### `FederationEnabled`<sup>Required</sup> <a name="FederationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationEnabled"></a>

```csharp
public bool|IResolvable FederationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FederationRoleArn`<sup>Required</sup> <a name="FederationRoleArn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationRoleArn"></a>

```csharp
public string FederationRoleArn { get; }
```

- *Type:* string

---

##### `IngestionEnabled`<sup>Required</sup> <a name="IngestionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.ingestionEnabled"></a>

```csharp
public bool|IResolvable IngestionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InsightsDestination`<sup>Required</sup> <a name="InsightsDestination" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightsDestination"></a>

```csharp
public string InsightsDestination { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MaxEventSize`<sup>Required</sup> <a name="MaxEventSize" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.maxEventSize"></a>

```csharp
public string MaxEventSize { get; }
```

- *Type:* string

---

##### `MultiRegionEnabled`<sup>Required</sup> <a name="MultiRegionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled"></a>

```csharp
public bool|IResolvable MultiRegionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrganizationEnabled`<sup>Required</sup> <a name="OrganizationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled"></a>

```csharp
public bool|IResolvable OrganizationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; }
```

- *Type:* double

---

##### `TerminationProtectionEnabled`<sup>Required</sup> <a name="TerminationProtectionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled"></a>

```csharp
public bool|IResolvable TerminationProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailEventDataStoreAdvancedEventSelectors <a name="CloudtrailEventDataStoreAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreAdvancedEventSelectors {
    IResolvable|CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors[] FieldSelectors = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors.property.fieldSelectors">FieldSelectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]</code> | Contains all selector statements in an advanced event selector. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors.property.name">Name</a></code> | <code>string</code> | An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets". |

---

##### `FieldSelectors`<sup>Optional</sup> <a name="FieldSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors.property.fieldSelectors"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors[] FieldSelectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]

Contains all selector statements in an advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#field_selectors CloudtrailEventDataStore#field_selectors}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}

---

### CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors <a name="CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors {
    string[] EndsWith = null,
    string[] EqualTo = null,
    string Field = null,
    string[] NotEndsWith = null,
    string[] NotEquals = null,
    string[] NotStartsWith = null,
    string[] StartsWith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.endsWith">EndsWith</a></code> | <code>string[]</code> | An operator that includes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.equalTo">EqualTo</a></code> | <code>string[]</code> | An operator that includes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.field">Field</a></code> | <code>string</code> | A field in an event record on which to filter events to be logged. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notEndsWith">NotEndsWith</a></code> | <code>string[]</code> | An operator that excludes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notEquals">NotEquals</a></code> | <code>string[]</code> | An operator that excludes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notStartsWith">NotStartsWith</a></code> | <code>string[]</code> | An operator that excludes events that match the first few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.startsWith">StartsWith</a></code> | <code>string[]</code> | An operator that includes events that match the first few characters of the event record field specified as the value of Field. |

---

##### `EndsWith`<sup>Optional</sup> <a name="EndsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.endsWith"></a>

```csharp
public string[] EndsWith { get; set; }
```

- *Type:* string[]

An operator that includes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}

---

##### `EqualTo`<sup>Optional</sup> <a name="EqualTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.equalTo"></a>

```csharp
public string[] EqualTo { get; set; }
```

- *Type:* string[]

An operator that includes events that match the exact value of the event record field specified as the value of Field.

This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

A field in an event record on which to filter events to be logged.

Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}

---

##### `NotEndsWith`<sup>Optional</sup> <a name="NotEndsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notEndsWith"></a>

```csharp
public string[] NotEndsWith { get; set; }
```

- *Type:* string[]

An operator that excludes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}

---

##### `NotEquals`<sup>Optional</sup> <a name="NotEquals" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notEquals"></a>

```csharp
public string[] NotEquals { get; set; }
```

- *Type:* string[]

An operator that excludes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}

---

##### `NotStartsWith`<sup>Optional</sup> <a name="NotStartsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notStartsWith"></a>

```csharp
public string[] NotStartsWith { get; set; }
```

- *Type:* string[]

An operator that excludes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.startsWith"></a>

```csharp
public string[] StartsWith { get; set; }
```

- *Type:* string[]

An operator that includes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}

---

### CloudtrailEventDataStoreConfig <a name="CloudtrailEventDataStoreConfig" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|CloudtrailEventDataStoreAdvancedEventSelectors[] AdvancedEventSelectors = null,
    string BillingMode = null,
    IResolvable|CloudtrailEventDataStoreContextKeySelectors[] ContextKeySelectors = null,
    bool|IResolvable FederationEnabled = null,
    string FederationRoleArn = null,
    bool|IResolvable IngestionEnabled = null,
    string InsightsDestination = null,
    IResolvable|CloudtrailEventDataStoreInsightSelectors[] InsightSelectors = null,
    string KmsKeyId = null,
    string MaxEventSize = null,
    bool|IResolvable MultiRegionEnabled = null,
    string Name = null,
    bool|IResolvable OrganizationEnabled = null,
    double RetentionPeriod = null,
    IResolvable|CloudtrailEventDataStoreTags[] Tags = null,
    bool|IResolvable TerminationProtectionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelectors">AdvancedEventSelectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]</code> | The advanced event selectors that were used to select events for the data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.billingMode">BillingMode</a></code> | <code>string</code> | The mode that the event data store will use to charge for event storage. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.contextKeySelectors">ContextKeySelectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]</code> | An array that enriches event records in an existing event data store by including additional information specified in individual ContexKeySelector entries. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.federationEnabled">FederationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether federation is enabled on an event data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.federationRoleArn">FederationRoleArn</a></code> | <code>string</code> | The ARN of the role used for event data store federation. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.ingestionEnabled">IngestionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the event data store is ingesting events. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.insightsDestination">InsightsDestination</a></code> | <code>string</code> | Specifies the ARN of the event data store that will collect Insights events. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.insightSelectors">InsightSelectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]</code> | Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing event data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.maxEventSize">MaxEventSize</a></code> | <code>string</code> | Specifies the maximum size allowed for the event. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled">MultiRegionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the event data store includes events from all regions, or only from the region in which it was created. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name">Name</a></code> | <code>string</code> | The name of the event data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled">OrganizationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates that an event data store is collecting logged events for an organization. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | The retention period, in days. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the event data store is protected from termination. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdvancedEventSelectors`<sup>Optional</sup> <a name="AdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelectors"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreAdvancedEventSelectors[] AdvancedEventSelectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]

The advanced event selectors that were used to select events for the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#advanced_event_selectors CloudtrailEventDataStore#advanced_event_selectors}

---

##### `BillingMode`<sup>Optional</sup> <a name="BillingMode" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.billingMode"></a>

```csharp
public string BillingMode { get; set; }
```

- *Type:* string

The mode that the event data store will use to charge for event storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#billing_mode CloudtrailEventDataStore#billing_mode}

---

##### `ContextKeySelectors`<sup>Optional</sup> <a name="ContextKeySelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.contextKeySelectors"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreContextKeySelectors[] ContextKeySelectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]

An array that enriches event records in an existing event data store by including additional information specified in individual ContexKeySelector entries.

If you add ContextKeySelectors, you must set MaxEventSize to Large.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#context_key_selectors CloudtrailEventDataStore#context_key_selectors}

---

##### `FederationEnabled`<sup>Optional</sup> <a name="FederationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.federationEnabled"></a>

```csharp
public bool|IResolvable FederationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether federation is enabled on an event data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#federation_enabled CloudtrailEventDataStore#federation_enabled}

---

##### `FederationRoleArn`<sup>Optional</sup> <a name="FederationRoleArn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.federationRoleArn"></a>

```csharp
public string FederationRoleArn { get; set; }
```

- *Type:* string

The ARN of the role used for event data store federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#federation_role_arn CloudtrailEventDataStore#federation_role_arn}

---

##### `IngestionEnabled`<sup>Optional</sup> <a name="IngestionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.ingestionEnabled"></a>

```csharp
public bool|IResolvable IngestionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the event data store is ingesting events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#ingestion_enabled CloudtrailEventDataStore#ingestion_enabled}

---

##### `InsightsDestination`<sup>Optional</sup> <a name="InsightsDestination" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.insightsDestination"></a>

```csharp
public string InsightsDestination { get; set; }
```

- *Type:* string

Specifies the ARN of the event data store that will collect Insights events.

Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#insights_destination CloudtrailEventDataStore#insights_destination}

---

##### `InsightSelectors`<sup>Optional</sup> <a name="InsightSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.insightSelectors"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreInsightSelectors[] InsightSelectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing event data store.

Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#insight_selectors CloudtrailEventDataStore#insight_selectors}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail.

The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#kms_key_id CloudtrailEventDataStore#kms_key_id}

---

##### `MaxEventSize`<sup>Optional</sup> <a name="MaxEventSize" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.maxEventSize"></a>

```csharp
public string MaxEventSize { get; set; }
```

- *Type:* string

Specifies the maximum size allowed for the event.

Valid values are Standard and Large. If you add ContextKeySelectors, this value must be set to Large.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#max_event_size CloudtrailEventDataStore#max_event_size}

---

##### `MultiRegionEnabled`<sup>Optional</sup> <a name="MultiRegionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled"></a>

```csharp
public bool|IResolvable MultiRegionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the event data store includes events from all regions, or only from the region in which it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the event data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}

---

##### `OrganizationEnabled`<sup>Optional</sup> <a name="OrganizationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled"></a>

```csharp
public bool|IResolvable OrganizationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates that an event data store is collecting logged events for an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; set; }
```

- *Type:* double

The retention period, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}.

---

##### `TerminationProtectionEnabled`<sup>Optional</sup> <a name="TerminationProtectionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled"></a>

```csharp
public bool|IResolvable TerminationProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the event data store is protected from termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}

---

### CloudtrailEventDataStoreContextKeySelectors <a name="CloudtrailEventDataStoreContextKeySelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreContextKeySelectors {
    string[] EqualTo = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors.property.equalTo">EqualTo</a></code> | <code>string[]</code> | An operator that includes events that match the exact value of the event record field specified in Type. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors.property.type">Type</a></code> | <code>string</code> | Specifies the type of the event record field in ContextKeySelector. Valid values include RequestContext, TagContext. |

---

##### `EqualTo`<sup>Optional</sup> <a name="EqualTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors.property.equalTo"></a>

```csharp
public string[] EqualTo { get; set; }
```

- *Type:* string[]

An operator that includes events that match the exact value of the event record field specified in Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the type of the event record field in ContextKeySelector. Valid values include RequestContext, TagContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#type CloudtrailEventDataStore#type}

---

### CloudtrailEventDataStoreInsightSelectors <a name="CloudtrailEventDataStoreInsightSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreInsightSelectors {
    string InsightType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors.property.insightType">InsightType</a></code> | <code>string</code> | The type of Insights to log on an event data store. |

---

##### `InsightType`<sup>Optional</sup> <a name="InsightType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors.property.insightType"></a>

```csharp
public string InsightType { get; set; }
```

- *Type:* string

The type of Insights to log on an event data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#insight_type CloudtrailEventDataStore#insight_type}

---

### CloudtrailEventDataStoreTags <a name="CloudtrailEventDataStoreTags" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#key CloudtrailEventDataStore#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_event_data_store#value CloudtrailEventDataStore#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList <a name="CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get"></a>

```csharp
private CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.internalValue"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]

---


### CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith">ResetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo">ResetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith">ResetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals">ResetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith">ResetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndsWith` <a name="ResetEndsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith"></a>

```csharp
private void ResetEndsWith()
```

##### `ResetEqualTo` <a name="ResetEqualTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo"></a>

```csharp
private void ResetEqualTo()
```

##### `ResetField` <a name="ResetField" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetField"></a>

```csharp
private void ResetField()
```

##### `ResetNotEndsWith` <a name="ResetNotEndsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith"></a>

```csharp
private void ResetNotEndsWith()
```

##### `ResetNotEquals` <a name="ResetNotEquals" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals"></a>

```csharp
private void ResetNotEquals()
```

##### `ResetNotStartsWith` <a name="ResetNotStartsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith"></a>

```csharp
private void ResetNotStartsWith()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput">EndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput">EqualToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput">NotEndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput">NotEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput">NotStartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput">StartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">EndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">EqualTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">NotEndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">NotEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">NotStartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">StartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndsWithInput`<sup>Optional</sup> <a name="EndsWithInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput"></a>

```csharp
public string[] EndsWithInput { get; }
```

- *Type:* string[]

---

##### `EqualToInput`<sup>Optional</sup> <a name="EqualToInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput"></a>

```csharp
public string[] EqualToInput { get; }
```

- *Type:* string[]

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `NotEndsWithInput`<sup>Optional</sup> <a name="NotEndsWithInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput"></a>

```csharp
public string[] NotEndsWithInput { get; }
```

- *Type:* string[]

---

##### `NotEqualsInput`<sup>Optional</sup> <a name="NotEqualsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput"></a>

```csharp
public string[] NotEqualsInput { get; }
```

- *Type:* string[]

---

##### `NotStartsWithInput`<sup>Optional</sup> <a name="NotStartsWithInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput"></a>

```csharp
public string[] NotStartsWithInput { get; }
```

- *Type:* string[]

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput"></a>

```csharp
public string[] StartsWithInput { get; }
```

- *Type:* string[]

---

##### `EndsWith`<sup>Required</sup> <a name="EndsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```csharp
public string[] EndsWith { get; }
```

- *Type:* string[]

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```csharp
public string[] EqualTo { get; }
```

- *Type:* string[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `NotEndsWith`<sup>Required</sup> <a name="NotEndsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```csharp
public string[] NotEndsWith { get; }
```

- *Type:* string[]

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```csharp
public string[] NotEquals { get; }
```

- *Type:* string[]

---

##### `NotStartsWith`<sup>Required</sup> <a name="NotStartsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```csharp
public string[] NotStartsWith { get; }
```

- *Type:* string[]

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```csharp
public string[] StartsWith { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>

---


### CloudtrailEventDataStoreAdvancedEventSelectorsList <a name="CloudtrailEventDataStoreAdvancedEventSelectorsList" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreAdvancedEventSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.get"></a>

```csharp
private CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.internalValue"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreAdvancedEventSelectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]

---


### CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.putFieldSelectors">PutFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resetFieldSelectors">ResetFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldSelectors` <a name="PutFieldSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.putFieldSelectors"></a>

```csharp
private void PutFieldSelectors(IResolvable|CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.putFieldSelectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]

---

##### `ResetFieldSelectors` <a name="ResetFieldSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resetFieldSelectors"></a>

```csharp
private void ResetFieldSelectors()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectors">FieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput">FieldSelectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldSelectors`<sup>Required</sup> <a name="FieldSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```csharp
public CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList FieldSelectors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `FieldSelectorsInput`<sup>Optional</sup> <a name="FieldSelectorsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors[] FieldSelectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreAdvancedEventSelectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>

---


### CloudtrailEventDataStoreContextKeySelectorsList <a name="CloudtrailEventDataStoreContextKeySelectorsList" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreContextKeySelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.get"></a>

```csharp
private CloudtrailEventDataStoreContextKeySelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.internalValue"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreContextKeySelectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]

---


### CloudtrailEventDataStoreContextKeySelectorsOutputReference <a name="CloudtrailEventDataStoreContextKeySelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreContextKeySelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resetEqualTo">ResetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEqualTo` <a name="ResetEqualTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resetEqualTo"></a>

```csharp
private void ResetEqualTo()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalToInput">EqualToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalTo">EqualTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EqualToInput`<sup>Optional</sup> <a name="EqualToInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalToInput"></a>

```csharp
public string[] EqualToInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalTo"></a>

```csharp
public string[] EqualTo { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreContextKeySelectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>

---


### CloudtrailEventDataStoreInsightSelectorsList <a name="CloudtrailEventDataStoreInsightSelectorsList" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreInsightSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.get"></a>

```csharp
private CloudtrailEventDataStoreInsightSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.internalValue"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreInsightSelectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]

---


### CloudtrailEventDataStoreInsightSelectorsOutputReference <a name="CloudtrailEventDataStoreInsightSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreInsightSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.resetInsightType">ResetInsightType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInsightType` <a name="ResetInsightType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.resetInsightType"></a>

```csharp
private void ResetInsightType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightTypeInput">InsightTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightType">InsightType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsightTypeInput`<sup>Optional</sup> <a name="InsightTypeInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightTypeInput"></a>

```csharp
public string InsightTypeInput { get; }
```

- *Type:* string

---

##### `InsightType`<sup>Required</sup> <a name="InsightType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightType"></a>

```csharp
public string InsightType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreInsightSelectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>

---


### CloudtrailEventDataStoreTagsList <a name="CloudtrailEventDataStoreTagsList" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.get"></a>

```csharp
private CloudtrailEventDataStoreTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.internalValue"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]

---


### CloudtrailEventDataStoreTagsOutputReference <a name="CloudtrailEventDataStoreTagsOutputReference" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudtrailEventDataStoreTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudtrailEventDataStoreTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>

---



