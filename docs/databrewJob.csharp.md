# `databrewJob` Submodule <a name="`databrewJob` Submodule" id="@cdktn/provider-awscc.databrewJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabrewJob <a name="DatabrewJob" id="@cdktn/provider-awscc.databrewJob.DatabrewJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job awscc_databrew_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJob(Construct Scope, string Id, DatabrewJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig">DatabrewJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig">DatabrewJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs">PutDatabaseOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs">PutDataCatalogOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample">PutJobSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation">PutOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs">PutOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration">PutProfileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe">PutRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations">PutValidationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatabaseOutputs">ResetDatabaseOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDataCatalogOutputs">ResetDataCatalogOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatasetName">ResetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionMode">ResetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetJobSample">ResetJobSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetLogSubscription">ResetLogSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputs">ResetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProfileConfiguration">ResetProfileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProjectName">ResetProjectName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetRecipe">ResetRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetValidationConfigurations">ResetValidationConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDatabaseOutputs` <a name="PutDatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs"></a>

```csharp
private void PutDatabaseOutputs(IResolvable|DatabrewJobDatabaseOutputs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]

---

##### `PutDataCatalogOutputs` <a name="PutDataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs"></a>

```csharp
private void PutDataCatalogOutputs(IResolvable|DatabrewJobDataCatalogOutputs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]

---

##### `PutJobSample` <a name="PutJobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample"></a>

```csharp
private void PutJobSample(DatabrewJobJobSample Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---

##### `PutOutputLocation` <a name="PutOutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation"></a>

```csharp
private void PutOutputLocation(DatabrewJobOutputLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---

##### `PutOutputs` <a name="PutOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs"></a>

```csharp
private void PutOutputs(IResolvable|DatabrewJobOutputs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]

---

##### `PutProfileConfiguration` <a name="PutProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration"></a>

```csharp
private void PutProfileConfiguration(DatabrewJobProfileConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---

##### `PutRecipe` <a name="PutRecipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe"></a>

```csharp
private void PutRecipe(DatabrewJobRecipe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags"></a>

```csharp
private void PutTags(IResolvable|DatabrewJobTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]

---

##### `PutValidationConfigurations` <a name="PutValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations"></a>

```csharp
private void PutValidationConfigurations(IResolvable|DatabrewJobValidationConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]

---

##### `ResetDatabaseOutputs` <a name="ResetDatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatabaseOutputs"></a>

```csharp
private void ResetDatabaseOutputs()
```

##### `ResetDataCatalogOutputs` <a name="ResetDataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDataCatalogOutputs"></a>

```csharp
private void ResetDataCatalogOutputs()
```

##### `ResetDatasetName` <a name="ResetDatasetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatasetName"></a>

```csharp
private void ResetDatasetName()
```

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionMode"></a>

```csharp
private void ResetEncryptionMode()
```

##### `ResetJobSample` <a name="ResetJobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetJobSample"></a>

```csharp
private void ResetJobSample()
```

##### `ResetLogSubscription` <a name="ResetLogSubscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetLogSubscription"></a>

```csharp
private void ResetLogSubscription()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputLocation"></a>

```csharp
private void ResetOutputLocation()
```

##### `ResetOutputs` <a name="ResetOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputs"></a>

```csharp
private void ResetOutputs()
```

##### `ResetProfileConfiguration` <a name="ResetProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProfileConfiguration"></a>

```csharp
private void ResetProfileConfiguration()
```

##### `ResetProjectName` <a name="ResetProjectName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProjectName"></a>

```csharp
private void ResetProjectName()
```

##### `ResetRecipe` <a name="ResetRecipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetRecipe"></a>

```csharp
private void ResetRecipe()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetValidationConfigurations` <a name="ResetValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetValidationConfigurations"></a>

```csharp
private void ResetValidationConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatabrewJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatabrewJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatabrewJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatabrewJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatabrewJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatabrewJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabrewJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabrewJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatabrewJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputs">DatabaseOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList">DatabrewJobDatabaseOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputs">DataCatalogOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList">DatabrewJobDataCatalogOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSample">JobSample</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference">DatabrewJobJobSampleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference">DatabrewJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList">DatabrewJobOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfiguration">ProfileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference">DatabrewJobProfileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipe">Recipe</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference">DatabrewJobRecipeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList">DatabrewJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurations">ValidationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList">DatabrewJobValidationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputsInput">DatabaseOutputsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputsInput">DataCatalogOutputsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetNameInput">DatasetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSampleInput">JobSampleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscriptionInput">LogSubscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocationInput">OutputLocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputsInput">OutputsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfigurationInput">ProfileConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectNameInput">ProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipeInput">RecipeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurationsInput">ValidationConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetName">DatasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscription">LogSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DatabaseOutputs`<sup>Required</sup> <a name="DatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputs"></a>

```csharp
public DatabrewJobDatabaseOutputsList DatabaseOutputs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList">DatabrewJobDatabaseOutputsList</a>

---

##### `DataCatalogOutputs`<sup>Required</sup> <a name="DataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputs"></a>

```csharp
public DatabrewJobDataCatalogOutputsList DataCatalogOutputs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList">DatabrewJobDataCatalogOutputsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobSample`<sup>Required</sup> <a name="JobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSample"></a>

```csharp
public DatabrewJobJobSampleOutputReference JobSample { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference">DatabrewJobJobSampleOutputReference</a>

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocation"></a>

```csharp
public DatabrewJobOutputLocationOutputReference OutputLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference">DatabrewJobOutputLocationOutputReference</a>

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputs"></a>

```csharp
public DatabrewJobOutputsList Outputs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList">DatabrewJobOutputsList</a>

---

##### `ProfileConfiguration`<sup>Required</sup> <a name="ProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfiguration"></a>

```csharp
public DatabrewJobProfileConfigurationOutputReference ProfileConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference">DatabrewJobProfileConfigurationOutputReference</a>

---

##### `Recipe`<sup>Required</sup> <a name="Recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipe"></a>

```csharp
public DatabrewJobRecipeOutputReference Recipe { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference">DatabrewJobRecipeOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tags"></a>

```csharp
public DatabrewJobTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList">DatabrewJobTagsList</a>

---

##### `ValidationConfigurations`<sup>Required</sup> <a name="ValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurations"></a>

```csharp
public DatabrewJobValidationConfigurationsList ValidationConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList">DatabrewJobValidationConfigurationsList</a>

---

##### `DatabaseOutputsInput`<sup>Optional</sup> <a name="DatabaseOutputsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputsInput"></a>

```csharp
public IResolvable|DatabrewJobDatabaseOutputs[] DatabaseOutputsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]

---

##### `DataCatalogOutputsInput`<sup>Optional</sup> <a name="DataCatalogOutputsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputsInput"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputs[] DataCatalogOutputsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]

---

##### `DatasetNameInput`<sup>Optional</sup> <a name="DatasetNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetNameInput"></a>

```csharp
public string DatasetNameInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionModeInput"></a>

```csharp
public string EncryptionModeInput { get; }
```

- *Type:* string

---

##### `JobSampleInput`<sup>Optional</sup> <a name="JobSampleInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSampleInput"></a>

```csharp
public IResolvable|DatabrewJobJobSample JobSampleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---

##### `LogSubscriptionInput`<sup>Optional</sup> <a name="LogSubscriptionInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscriptionInput"></a>

```csharp
public string LogSubscriptionInput { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocationInput"></a>

```csharp
public IResolvable|DatabrewJobOutputLocation OutputLocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---

##### `OutputsInput`<sup>Optional</sup> <a name="OutputsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputsInput"></a>

```csharp
public IResolvable|DatabrewJobOutputs[] OutputsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]

---

##### `ProfileConfigurationInput`<sup>Optional</sup> <a name="ProfileConfigurationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfigurationInput"></a>

```csharp
public IResolvable|DatabrewJobProfileConfiguration ProfileConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectNameInput"></a>

```csharp
public string ProjectNameInput { get; }
```

- *Type:* string

---

##### `RecipeInput`<sup>Optional</sup> <a name="RecipeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipeInput"></a>

```csharp
public IResolvable|DatabrewJobRecipe RecipeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tagsInput"></a>

```csharp
public IResolvable|DatabrewJobTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValidationConfigurationsInput`<sup>Optional</sup> <a name="ValidationConfigurationsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurationsInput"></a>

```csharp
public IResolvable|DatabrewJobValidationConfigurations[] ValidationConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetName"></a>

```csharp
public string DatasetName { get; }
```

- *Type:* string

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `LogSubscription`<sup>Required</sup> <a name="LogSubscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscription"></a>

```csharp
public string LogSubscription { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabrewJobConfig <a name="DatabrewJobConfig" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string RoleArn,
    string Type,
    IResolvable|DatabrewJobDatabaseOutputs[] DatabaseOutputs = null,
    IResolvable|DatabrewJobDataCatalogOutputs[] DataCatalogOutputs = null,
    string DatasetName = null,
    string EncryptionKeyArn = null,
    string EncryptionMode = null,
    DatabrewJobJobSample JobSample = null,
    string LogSubscription = null,
    double MaxCapacity = null,
    double MaxRetries = null,
    DatabrewJobOutputLocation OutputLocation = null,
    IResolvable|DatabrewJobOutputs[] Outputs = null,
    DatabrewJobProfileConfiguration ProfileConfiguration = null,
    string ProjectName = null,
    DatabrewJobRecipe Recipe = null,
    IResolvable|DatabrewJobTags[] Tags = null,
    double Timeout = null,
    IResolvable|DatabrewJobValidationConfigurations[] ValidationConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.name">Name</a></code> | <code>string</code> | Job name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Role arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.type">Type</a></code> | <code>string</code> | Job type. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.databaseOutputs">DatabaseOutputs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dataCatalogOutputs">DataCatalogOutputs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.datasetName">DatasetName</a></code> | <code>string</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | Encryption Key Arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | Encryption mode. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.jobSample">JobSample</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | Job Sample. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.logSubscription">LogSubscription</a></code> | <code>string</code> | Log subscription. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Max capacity. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Max retries. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | Output location. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputs">Outputs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.profileConfiguration">ProfileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | Profile Job configuration. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.projectName">ProjectName</a></code> | <code>string</code> | Project name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.recipe">Recipe</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#tags DatabrewJob#tags}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.timeout">Timeout</a></code> | <code>double</code> | Timeout. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.validationConfigurations">ValidationConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]</code> | Data quality rules configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Job name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#name DatabrewJob#name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#role_arn DatabrewJob#role_arn}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Job type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#type DatabrewJob#type}

---

##### `DatabaseOutputs`<sup>Optional</sup> <a name="DatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.databaseOutputs"></a>

```csharp
public IResolvable|DatabrewJobDatabaseOutputs[] DatabaseOutputs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}.

---

##### `DataCatalogOutputs`<sup>Optional</sup> <a name="DataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dataCatalogOutputs"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputs[] DataCatalogOutputs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}.

---

##### `DatasetName`<sup>Optional</sup> <a name="DatasetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.datasetName"></a>

```csharp
public string DatasetName { get; set; }
```

- *Type:* string

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#dataset_name DatabrewJob#dataset_name}

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

Encryption Key Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#encryption_key_arn DatabrewJob#encryption_key_arn}

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; set; }
```

- *Type:* string

Encryption mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#encryption_mode DatabrewJob#encryption_mode}

---

##### `JobSample`<sup>Optional</sup> <a name="JobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.jobSample"></a>

```csharp
public DatabrewJobJobSample JobSample { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

Job Sample.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#job_sample DatabrewJob#job_sample}

---

##### `LogSubscription`<sup>Optional</sup> <a name="LogSubscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.logSubscription"></a>

```csharp
public string LogSubscription { get; set; }
```

- *Type:* string

Log subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#log_subscription DatabrewJob#log_subscription}

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Max capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#max_capacity DatabrewJob#max_capacity}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Max retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#max_retries DatabrewJob#max_retries}

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputLocation"></a>

```csharp
public DatabrewJobOutputLocation OutputLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#output_location DatabrewJob#output_location}

---

##### `Outputs`<sup>Optional</sup> <a name="Outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputs"></a>

```csharp
public IResolvable|DatabrewJobOutputs[] Outputs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}.

---

##### `ProfileConfiguration`<sup>Optional</sup> <a name="ProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.profileConfiguration"></a>

```csharp
public DatabrewJobProfileConfiguration ProfileConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

Profile Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#profile_configuration DatabrewJob#profile_configuration}

---

##### `ProjectName`<sup>Optional</sup> <a name="ProjectName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.projectName"></a>

```csharp
public string ProjectName { get; set; }
```

- *Type:* string

Project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#project_name DatabrewJob#project_name}

---

##### `Recipe`<sup>Optional</sup> <a name="Recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.recipe"></a>

```csharp
public DatabrewJobRecipe Recipe { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.tags"></a>

```csharp
public IResolvable|DatabrewJobTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#tags DatabrewJob#tags}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#timeout DatabrewJob#timeout}

---

##### `ValidationConfigurations`<sup>Optional</sup> <a name="ValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.validationConfigurations"></a>

```csharp
public IResolvable|DatabrewJobValidationConfigurations[] ValidationConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]

Data quality rules configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#validation_configurations DatabrewJob#validation_configurations}

---

### DatabrewJobDatabaseOutputs <a name="DatabrewJobDatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDatabaseOutputs {
    DatabrewJobDatabaseOutputsDatabaseOptions DatabaseOptions = null,
    string DatabaseOutputMode = null,
    string GlueConnectionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOptions">DatabaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOutputMode">DatabaseOutputMode</a></code> | <code>string</code> | Database table name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.glueConnectionName">GlueConnectionName</a></code> | <code>string</code> | Glue connection name. |

---

##### `DatabaseOptions`<sup>Optional</sup> <a name="DatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOptions"></a>

```csharp
public DatabrewJobDatabaseOutputsDatabaseOptions DatabaseOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}.

---

##### `DatabaseOutputMode`<sup>Optional</sup> <a name="DatabaseOutputMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOutputMode"></a>

```csharp
public string DatabaseOutputMode { get; set; }
```

- *Type:* string

Database table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#database_output_mode DatabrewJob#database_output_mode}

---

##### `GlueConnectionName`<sup>Optional</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.glueConnectionName"></a>

```csharp
public string GlueConnectionName { get; set; }
```

- *Type:* string

Glue connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#glue_connection_name DatabrewJob#glue_connection_name}

---

### DatabrewJobDatabaseOutputsDatabaseOptions <a name="DatabrewJobDatabaseOutputsDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDatabaseOutputsDatabaseOptions {
    string TableName = null,
    DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory TempDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | S3 Output location. |

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

##### `TempDirectory`<sup>Optional</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tempDirectory"></a>

```csharp
public DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory TempDirectory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}

---

### DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory <a name="DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory {
    string Bucket = null,
    string BucketOwner = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobDataCatalogOutputs <a name="DatabrewJobDataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputs {
    string CatalogId = null,
    string DatabaseName = null,
    DatabrewJobDataCatalogOutputsDatabaseOptions DatabaseOptions = null,
    bool|IResolvable Overwrite = null,
    DatabrewJobDataCatalogOutputsS3Options S3Options = null,
    string TableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#catalog_id DatabrewJob#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#database_name DatabrewJob#database_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseOptions">DatabaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.overwrite">Overwrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.s3Options">S3Options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#s3_options DatabrewJob#s3_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#catalog_id DatabrewJob#catalog_id}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#database_name DatabrewJob#database_name}.

---

##### `DatabaseOptions`<sup>Optional</sup> <a name="DatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseOptions"></a>

```csharp
public DatabrewJobDataCatalogOutputsDatabaseOptions DatabaseOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}.

---

##### `Overwrite`<sup>Optional</sup> <a name="Overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.overwrite"></a>

```csharp
public bool|IResolvable Overwrite { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}.

---

##### `S3Options`<sup>Optional</sup> <a name="S3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.s3Options"></a>

```csharp
public DatabrewJobDataCatalogOutputsS3Options S3Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#s3_options DatabrewJob#s3_options}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

### DatabrewJobDataCatalogOutputsDatabaseOptions <a name="DatabrewJobDataCatalogOutputsDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputsDatabaseOptions {
    string TableName = null,
    DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory TempDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | S3 Output location. |

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

##### `TempDirectory`<sup>Optional</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tempDirectory"></a>

```csharp
public DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory TempDirectory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}

---

### DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory {
    string Bucket = null,
    string BucketOwner = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobDataCatalogOutputsS3Options <a name="DatabrewJobDataCatalogOutputsS3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputsS3Options {
    DatabrewJobDataCatalogOutputsS3OptionsLocation Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | S3 Output location. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.property.location"></a>

```csharp
public DatabrewJobDataCatalogOutputsS3OptionsLocation Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#location DatabrewJob#location}

---

### DatabrewJobDataCatalogOutputsS3OptionsLocation <a name="DatabrewJobDataCatalogOutputsS3OptionsLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputsS3OptionsLocation {
    string Bucket = null,
    string BucketOwner = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobJobSample <a name="DatabrewJobJobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobJobSample {
    string Mode = null,
    double Size = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.mode">Mode</a></code> | <code>string</code> | Sample configuration mode for profile jobs. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.size">Size</a></code> | <code>double</code> | Sample configuration size for profile jobs. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Sample configuration mode for profile jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#mode DatabrewJob#mode}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Sample configuration size for profile jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#size DatabrewJob#size}

---

### DatabrewJobOutputLocation <a name="DatabrewJobOutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputLocation {
    string Bucket = null,
    string BucketOwner = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobOutputs <a name="DatabrewJobOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputs {
    string CompressionFormat = null,
    string Format = null,
    DatabrewJobOutputsFormatOptions FormatOptions = null,
    DatabrewJobOutputsLocation Location = null,
    double MaxOutputFiles = null,
    bool|IResolvable Overwrite = null,
    string[] PartitionColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.compressionFormat">CompressionFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#compression_format DatabrewJob#compression_format}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#format DatabrewJob#format}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | Format options for job Output. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | S3 Output location. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.maxOutputFiles">MaxOutputFiles</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#max_output_files DatabrewJob#max_output_files}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.overwrite">Overwrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.partitionColumns">PartitionColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#partition_columns DatabrewJob#partition_columns}. |

---

##### `CompressionFormat`<sup>Optional</sup> <a name="CompressionFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.compressionFormat"></a>

```csharp
public string CompressionFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#compression_format DatabrewJob#compression_format}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#format DatabrewJob#format}.

---

##### `FormatOptions`<sup>Optional</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.formatOptions"></a>

```csharp
public DatabrewJobOutputsFormatOptions FormatOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

Format options for job Output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#format_options DatabrewJob#format_options}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.location"></a>

```csharp
public DatabrewJobOutputsLocation Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#location DatabrewJob#location}

---

##### `MaxOutputFiles`<sup>Optional</sup> <a name="MaxOutputFiles" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.maxOutputFiles"></a>

```csharp
public double MaxOutputFiles { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#max_output_files DatabrewJob#max_output_files}.

---

##### `Overwrite`<sup>Optional</sup> <a name="Overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.overwrite"></a>

```csharp
public bool|IResolvable Overwrite { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}.

---

##### `PartitionColumns`<sup>Optional</sup> <a name="PartitionColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.partitionColumns"></a>

```csharp
public string[] PartitionColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#partition_columns DatabrewJob#partition_columns}.

---

### DatabrewJobOutputsFormatOptions <a name="DatabrewJobOutputsFormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputsFormatOptions {
    DatabrewJobOutputsFormatOptionsCsv Csv = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | Output Csv options. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.property.csv"></a>

```csharp
public DatabrewJobOutputsFormatOptionsCsv Csv { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

Output Csv options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#csv DatabrewJob#csv}

---

### DatabrewJobOutputsFormatOptionsCsv <a name="DatabrewJobOutputsFormatOptionsCsv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputsFormatOptionsCsv {
    string Delimiter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.property.delimiter">Delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#delimiter DatabrewJob#delimiter}. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#delimiter DatabrewJob#delimiter}.

---

### DatabrewJobOutputsLocation <a name="DatabrewJobOutputsLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputsLocation {
    string Bucket = null,
    string BucketOwner = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobProfileConfiguration <a name="DatabrewJobProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfiguration {
    IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurations[] ColumnStatisticsConfigurations = null,
    DatabrewJobProfileConfigurationDatasetStatisticsConfiguration DatasetStatisticsConfiguration = null,
    DatabrewJobProfileConfigurationEntityDetectorConfiguration EntityDetectorConfiguration = null,
    IResolvable|DatabrewJobProfileConfigurationProfileColumns[] ProfileColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.columnStatisticsConfigurations">ColumnStatisticsConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#column_statistics_configurations DatabrewJob#column_statistics_configurations}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.datasetStatisticsConfiguration">DatasetStatisticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.entityDetectorConfiguration">EntityDetectorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#entity_detector_configuration DatabrewJob#entity_detector_configuration}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.profileColumns">ProfileColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#profile_columns DatabrewJob#profile_columns}. |

---

##### `ColumnStatisticsConfigurations`<sup>Optional</sup> <a name="ColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.columnStatisticsConfigurations"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurations[] ColumnStatisticsConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#column_statistics_configurations DatabrewJob#column_statistics_configurations}.

---

##### `DatasetStatisticsConfiguration`<sup>Optional</sup> <a name="DatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.datasetStatisticsConfiguration"></a>

```csharp
public DatabrewJobProfileConfigurationDatasetStatisticsConfiguration DatasetStatisticsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}.

---

##### `EntityDetectorConfiguration`<sup>Optional</sup> <a name="EntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.entityDetectorConfiguration"></a>

```csharp
public DatabrewJobProfileConfigurationEntityDetectorConfiguration EntityDetectorConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#entity_detector_configuration DatabrewJob#entity_detector_configuration}.

---

##### `ProfileColumns`<sup>Optional</sup> <a name="ProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.profileColumns"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationProfileColumns[] ProfileColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#profile_columns DatabrewJob#profile_columns}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurations <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurations {
    IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[] Selectors = null,
    DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics Statistics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.selectors">Selectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#selectors DatabrewJob#selectors}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.statistics">Statistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}. |

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.selectors"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[] Selectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#selectors DatabrewJob#selectors}.

---

##### `Statistics`<sup>Optional</sup> <a name="Statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.statistics"></a>

```csharp
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics Statistics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors {
    string Name = null,
    string Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#name DatabrewJob#name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#regex DatabrewJob#regex}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#name DatabrewJob#name}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#regex DatabrewJob#regex}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics {
    string[] IncludedStatistics = null,
    IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[] Overrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.includedStatistics">IncludedStatistics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.overrides">Overrides</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}. |

---

##### `IncludedStatistics`<sup>Optional</sup> <a name="IncludedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.includedStatistics"></a>

```csharp
public string[] IncludedStatistics { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}.

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.overrides"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[] Overrides { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides {
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Statistic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.statistic">Statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}.

---

##### `Statistic`<sup>Optional</sup> <a name="Statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}.

---

### DatabrewJobProfileConfigurationDatasetStatisticsConfiguration <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationDatasetStatisticsConfiguration {
    string[] IncludedStatistics = null,
    IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[] Overrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.includedStatistics">IncludedStatistics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.overrides">Overrides</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}. |

---

##### `IncludedStatistics`<sup>Optional</sup> <a name="IncludedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.includedStatistics"></a>

```csharp
public string[] IncludedStatistics { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}.

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.overrides"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[] Overrides { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}.

---

### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides {
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Statistic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.statistic">Statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}.

---

##### `Statistic`<sup>Optional</sup> <a name="Statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}.

---

### DatabrewJobProfileConfigurationEntityDetectorConfiguration <a name="DatabrewJobProfileConfigurationEntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationEntityDetectorConfiguration {
    DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics AllowedStatistics = null,
    string[] EntityTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.allowedStatistics">AllowedStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#allowed_statistics DatabrewJob#allowed_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.entityTypes">EntityTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#entity_types DatabrewJob#entity_types}. |

---

##### `AllowedStatistics`<sup>Optional</sup> <a name="AllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.allowedStatistics"></a>

```csharp
public DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics AllowedStatistics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#allowed_statistics DatabrewJob#allowed_statistics}.

---

##### `EntityTypes`<sup>Optional</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.entityTypes"></a>

```csharp
public string[] EntityTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#entity_types DatabrewJob#entity_types}.

---

### DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics {
    string[] Statistics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.property.statistics">Statistics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}. |

---

##### `Statistics`<sup>Optional</sup> <a name="Statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.property.statistics"></a>

```csharp
public string[] Statistics { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}.

---

### DatabrewJobProfileConfigurationProfileColumns <a name="DatabrewJobProfileConfigurationProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationProfileColumns {
    string Name = null,
    string Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#name DatabrewJob#name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#regex DatabrewJob#regex}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#name DatabrewJob#name}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#regex DatabrewJob#regex}.

---

### DatabrewJobRecipe <a name="DatabrewJobRecipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobRecipe {
    string Name = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.name">Name</a></code> | <code>string</code> | Recipe name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.version">Version</a></code> | <code>string</code> | Recipe version. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Recipe name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#name DatabrewJob#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Recipe version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#version DatabrewJob#version}

---

### DatabrewJobTags <a name="DatabrewJobTags" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#value DatabrewJob#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#value DatabrewJob#value}.

---

### DatabrewJobValidationConfigurations <a name="DatabrewJobValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobValidationConfigurations {
    string RulesetArn = null,
    string ValidationMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.rulesetArn">RulesetArn</a></code> | <code>string</code> | Arn of the Ruleset. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.validationMode">ValidationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#validation_mode DatabrewJob#validation_mode}. |

---

##### `RulesetArn`<sup>Optional</sup> <a name="RulesetArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.rulesetArn"></a>

```csharp
public string RulesetArn { get; set; }
```

- *Type:* string

Arn of the Ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#ruleset_arn DatabrewJob#ruleset_arn}

---

##### `ValidationMode`<sup>Optional</sup> <a name="ValidationMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.validationMode"></a>

```csharp
public string ValidationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/databrew_job#validation_mode DatabrewJob#validation_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference <a name="DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory">PutTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTempDirectory">ResetTempDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTempDirectory` <a name="PutTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory"></a>

```csharp
private void PutTempDirectory(DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTempDirectory` <a name="ResetTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTempDirectory"></a>

```csharp
private void ResetTempDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput">TempDirectoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TempDirectory`<sup>Required</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```csharp
public DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference TempDirectory { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TempDirectoryInput`<sup>Optional</sup> <a name="TempDirectoryInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput"></a>

```csharp
public IResolvable|DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory TempDirectoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobDatabaseOutputsDatabaseOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---


### DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---


### DatabrewJobDatabaseOutputsList <a name="DatabrewJobDatabaseOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDatabaseOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get"></a>

```csharp
private DatabrewJobDatabaseOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobDatabaseOutputs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]

---


### DatabrewJobDatabaseOutputsOutputReference <a name="DatabrewJobDatabaseOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDatabaseOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions">PutDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOptions">ResetDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOutputMode">ResetDatabaseOutputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetGlueConnectionName">ResetGlueConnectionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseOptions` <a name="PutDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions"></a>

```csharp
private void PutDatabaseOptions(DatabrewJobDatabaseOutputsDatabaseOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---

##### `ResetDatabaseOptions` <a name="ResetDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOptions"></a>

```csharp
private void ResetDatabaseOptions()
```

##### `ResetDatabaseOutputMode` <a name="ResetDatabaseOutputMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOutputMode"></a>

```csharp
private void ResetDatabaseOutputMode()
```

##### `ResetGlueConnectionName` <a name="ResetGlueConnectionName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetGlueConnectionName"></a>

```csharp
private void ResetGlueConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptions">DatabaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptionsInput">DatabaseOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputModeInput">DatabaseOutputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionNameInput">GlueConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode">DatabaseOutputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName">GlueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseOptions`<sup>Required</sup> <a name="DatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptions"></a>

```csharp
public DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference DatabaseOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a>

---

##### `DatabaseOptionsInput`<sup>Optional</sup> <a name="DatabaseOptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptionsInput"></a>

```csharp
public IResolvable|DatabrewJobDatabaseOutputsDatabaseOptions DatabaseOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---

##### `DatabaseOutputModeInput`<sup>Optional</sup> <a name="DatabaseOutputModeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputModeInput"></a>

```csharp
public string DatabaseOutputModeInput { get; }
```

- *Type:* string

---

##### `GlueConnectionNameInput`<sup>Optional</sup> <a name="GlueConnectionNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionNameInput"></a>

```csharp
public string GlueConnectionNameInput { get; }
```

- *Type:* string

---

##### `DatabaseOutputMode`<sup>Required</sup> <a name="DatabaseOutputMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode"></a>

```csharp
public string DatabaseOutputMode { get; }
```

- *Type:* string

---

##### `GlueConnectionName`<sup>Required</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName"></a>

```csharp
public string GlueConnectionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobDatabaseOutputs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>

---


### DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory">PutTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTempDirectory">ResetTempDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTempDirectory` <a name="PutTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory"></a>

```csharp
private void PutTempDirectory(DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTempDirectory` <a name="ResetTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTempDirectory"></a>

```csharp
private void ResetTempDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput">TempDirectoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TempDirectory`<sup>Required</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```csharp
public DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference TempDirectory { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TempDirectoryInput`<sup>Optional</sup> <a name="TempDirectoryInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory TempDirectoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputsDatabaseOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---


### DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---


### DatabrewJobDataCatalogOutputsList <a name="DatabrewJobDataCatalogOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get"></a>

```csharp
private DatabrewJobDataCatalogOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]

---


### DatabrewJobDataCatalogOutputsOutputReference <a name="DatabrewJobDataCatalogOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions">PutDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options">PutS3Options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseOptions">ResetDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetOverwrite">ResetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetS3Options">ResetS3Options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseOptions` <a name="PutDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions"></a>

```csharp
private void PutDatabaseOptions(DatabrewJobDataCatalogOutputsDatabaseOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---

##### `PutS3Options` <a name="PutS3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options"></a>

```csharp
private void PutS3Options(DatabrewJobDataCatalogOutputsS3Options Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetDatabaseOptions` <a name="ResetDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseOptions"></a>

```csharp
private void ResetDatabaseOptions()
```

##### `ResetOverwrite` <a name="ResetOverwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetOverwrite"></a>

```csharp
private void ResetOverwrite()
```

##### `ResetS3Options` <a name="ResetS3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetS3Options"></a>

```csharp
private void ResetS3Options()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions">DatabaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3Options">S3Options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference">DatabrewJobDataCatalogOutputsS3OptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptionsInput">DatabaseOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwriteInput">OverwriteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3OptionsInput">S3OptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwrite">Overwrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseOptions`<sup>Required</sup> <a name="DatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions"></a>

```csharp
public DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference DatabaseOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a>

---

##### `S3Options`<sup>Required</sup> <a name="S3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3Options"></a>

```csharp
public DatabrewJobDataCatalogOutputsS3OptionsOutputReference S3Options { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference">DatabrewJobDataCatalogOutputsS3OptionsOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DatabaseOptionsInput`<sup>Optional</sup> <a name="DatabaseOptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptionsInput"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputsDatabaseOptions DatabaseOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---

##### `OverwriteInput`<sup>Optional</sup> <a name="OverwriteInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwriteInput"></a>

```csharp
public bool|IResolvable OverwriteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `S3OptionsInput`<sup>Optional</sup> <a name="S3OptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3OptionsInput"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputsS3Options S3OptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwrite"></a>

```csharp
public bool|IResolvable Overwrite { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>

---


### DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference <a name="DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputsS3OptionsLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---


### DatabrewJobDataCatalogOutputsS3OptionsOutputReference <a name="DatabrewJobDataCatalogOutputsS3OptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobDataCatalogOutputsS3OptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation"></a>

```csharp
private void PutLocation(DatabrewJobDataCatalogOutputsS3OptionsLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.locationInput">LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location"></a>

```csharp
public DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.locationInput"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputsS3OptionsLocation LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobDataCatalogOutputsS3Options InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---


### DatabrewJobJobSampleOutputReference <a name="DatabrewJobJobSampleOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobJobSampleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSize` <a name="ResetSize" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobJobSample InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---


### DatabrewJobOutputLocationOutputReference <a name="DatabrewJobOutputLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobOutputLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---


### DatabrewJobOutputsFormatOptionsCsvOutputReference <a name="DatabrewJobOutputsFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputsFormatOptionsCsvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobOutputsFormatOptionsCsv InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---


### DatabrewJobOutputsFormatOptionsOutputReference <a name="DatabrewJobOutputsFormatOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputsFormatOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv"></a>

```csharp
private void PutCsv(DatabrewJobOutputsFormatOptionsCsv Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resetCsv"></a>

```csharp
private void ResetCsv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference">DatabrewJobOutputsFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csvInput">CsvInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csv"></a>

```csharp
public DatabrewJobOutputsFormatOptionsCsvOutputReference Csv { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference">DatabrewJobOutputsFormatOptionsCsvOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csvInput"></a>

```csharp
public IResolvable|DatabrewJobOutputsFormatOptionsCsv CsvInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobOutputsFormatOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---


### DatabrewJobOutputsList <a name="DatabrewJobOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get"></a>

```csharp
private DatabrewJobOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobOutputs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]

---


### DatabrewJobOutputsLocationOutputReference <a name="DatabrewJobOutputsLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputsLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobOutputsLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---


### DatabrewJobOutputsOutputReference <a name="DatabrewJobOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions">PutFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetCompressionFormat">ResetCompressionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormatOptions">ResetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetMaxOutputFiles">ResetMaxOutputFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetOverwrite">ResetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetPartitionColumns">ResetPartitionColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFormatOptions` <a name="PutFormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions"></a>

```csharp
private void PutFormatOptions(DatabrewJobOutputsFormatOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation"></a>

```csharp
private void PutLocation(DatabrewJobOutputsLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---

##### `ResetCompressionFormat` <a name="ResetCompressionFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetCompressionFormat"></a>

```csharp
private void ResetCompressionFormat()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetFormatOptions` <a name="ResetFormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormatOptions"></a>

```csharp
private void ResetFormatOptions()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMaxOutputFiles` <a name="ResetMaxOutputFiles" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetMaxOutputFiles"></a>

```csharp
private void ResetMaxOutputFiles()
```

##### `ResetOverwrite` <a name="ResetOverwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetOverwrite"></a>

```csharp
private void ResetOverwrite()
```

##### `ResetPartitionColumns` <a name="ResetPartitionColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetPartitionColumns"></a>

```csharp
private void ResetPartitionColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference">DatabrewJobOutputsFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference">DatabrewJobOutputsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormatInput">CompressionFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptionsInput">FormatOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.locationInput">LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFilesInput">MaxOutputFilesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwriteInput">OverwriteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumnsInput">PartitionColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormat">CompressionFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFiles">MaxOutputFiles</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwrite">Overwrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumns">PartitionColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptions"></a>

```csharp
public DatabrewJobOutputsFormatOptionsOutputReference FormatOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference">DatabrewJobOutputsFormatOptionsOutputReference</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.location"></a>

```csharp
public DatabrewJobOutputsLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference">DatabrewJobOutputsLocationOutputReference</a>

---

##### `CompressionFormatInput`<sup>Optional</sup> <a name="CompressionFormatInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormatInput"></a>

```csharp
public string CompressionFormatInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `FormatOptionsInput`<sup>Optional</sup> <a name="FormatOptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptionsInput"></a>

```csharp
public IResolvable|DatabrewJobOutputsFormatOptions FormatOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.locationInput"></a>

```csharp
public IResolvable|DatabrewJobOutputsLocation LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---

##### `MaxOutputFilesInput`<sup>Optional</sup> <a name="MaxOutputFilesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFilesInput"></a>

```csharp
public double MaxOutputFilesInput { get; }
```

- *Type:* double

---

##### `OverwriteInput`<sup>Optional</sup> <a name="OverwriteInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwriteInput"></a>

```csharp
public bool|IResolvable OverwriteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PartitionColumnsInput`<sup>Optional</sup> <a name="PartitionColumnsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumnsInput"></a>

```csharp
public string[] PartitionColumnsInput { get; }
```

- *Type:* string[]

---

##### `CompressionFormat`<sup>Required</sup> <a name="CompressionFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormat"></a>

```csharp
public string CompressionFormat { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `MaxOutputFiles`<sup>Required</sup> <a name="MaxOutputFiles" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFiles"></a>

```csharp
public double MaxOutputFiles { get; }
```

- *Type:* double

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwrite"></a>

```csharp
public bool|IResolvable Overwrite { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PartitionColumns`<sup>Required</sup> <a name="PartitionColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumns"></a>

```csharp
public string[] PartitionColumns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobOutputs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get"></a>

```csharp
private DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics">PutStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetSelectors">ResetSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetStatistics">ResetStatistics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelectors` <a name="PutSelectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors"></a>

```csharp
private void PutSelectors(IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]

---

##### `PutStatistics` <a name="PutStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics"></a>

```csharp
private void PutStatistics(DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetSelectors"></a>

```csharp
private void ResetSelectors()
```

##### `ResetStatistics` <a name="ResetStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetStatistics"></a>

```csharp
private void ResetStatistics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics">Statistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statisticsInput">StatisticsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors"></a>

```csharp
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList Selectors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a>

---

##### `Statistics`<sup>Required</sup> <a name="Statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics"></a>

```csharp
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference Statistics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a>

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectorsInput"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[] SelectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]

---

##### `StatisticsInput`<sup>Optional</sup> <a name="StatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statisticsInput"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics StatisticsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get"></a>

```csharp
private DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetIncludedStatistics">ResetIncludedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverrides` <a name="PutOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides"></a>

```csharp
private void PutOverrides(IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]

---

##### `ResetIncludedStatistics` <a name="ResetIncludedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetIncludedStatistics"></a>

```csharp
private void ResetIncludedStatistics()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetOverrides"></a>

```csharp
private void ResetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatisticsInput">IncludedStatisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overridesInput">OverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics">IncludedStatistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides"></a>

```csharp
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList Overrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a>

---

##### `IncludedStatisticsInput`<sup>Optional</sup> <a name="IncludedStatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatisticsInput"></a>

```csharp
public string[] IncludedStatisticsInput { get; }
```

- *Type:* string[]

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overridesInput"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[] OverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]

---

##### `IncludedStatistics`<sup>Required</sup> <a name="IncludedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics"></a>

```csharp
public string[] IncludedStatistics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get"></a>

```csharp
private DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetStatistic">ResetStatistic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetStatistic` <a name="ResetStatistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetStatistic"></a>

```csharp
private void ResetStatistic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetIncludedStatistics">ResetIncludedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverrides` <a name="PutOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides"></a>

```csharp
private void PutOverrides(IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]

---

##### `ResetIncludedStatistics` <a name="ResetIncludedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetIncludedStatistics"></a>

```csharp
private void ResetIncludedStatistics()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetOverrides"></a>

```csharp
private void ResetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatisticsInput">IncludedStatisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overridesInput">OverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics">IncludedStatistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides"></a>

```csharp
public DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList Overrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a>

---

##### `IncludedStatisticsInput`<sup>Optional</sup> <a name="IncludedStatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatisticsInput"></a>

```csharp
public string[] IncludedStatisticsInput { get; }
```

- *Type:* string[]

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overridesInput"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[] OverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]

---

##### `IncludedStatistics`<sup>Required</sup> <a name="IncludedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics"></a>

```csharp
public string[] IncludedStatistics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get"></a>

```csharp
private DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetStatistic">ResetStatistic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetStatistic` <a name="ResetStatistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetStatistic"></a>

```csharp
private void ResetStatistic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>

---


### DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resetStatistics">ResetStatistics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatistics` <a name="ResetStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resetStatistics"></a>

```csharp
private void ResetStatistics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statisticsInput">StatisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics">Statistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatisticsInput`<sup>Optional</sup> <a name="StatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statisticsInput"></a>

```csharp
public string[] StatisticsInput { get; }
```

- *Type:* string[]

---

##### `Statistics`<sup>Required</sup> <a name="Statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics"></a>

```csharp
public string[] Statistics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---


### DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics">PutAllowedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetAllowedStatistics">ResetAllowedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetEntityTypes">ResetEntityTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedStatistics` <a name="PutAllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics"></a>

```csharp
private void PutAllowedStatistics(DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---

##### `ResetAllowedStatistics` <a name="ResetAllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetAllowedStatistics"></a>

```csharp
private void ResetAllowedStatistics()
```

##### `ResetEntityTypes` <a name="ResetEntityTypes" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetEntityTypes"></a>

```csharp
private void ResetEntityTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics">AllowedStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatisticsInput">AllowedStatisticsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypesInput">EntityTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes">EntityTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedStatistics`<sup>Required</sup> <a name="AllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics"></a>

```csharp
public DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference AllowedStatistics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a>

---

##### `AllowedStatisticsInput`<sup>Optional</sup> <a name="AllowedStatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatisticsInput"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics AllowedStatisticsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---

##### `EntityTypesInput`<sup>Optional</sup> <a name="EntityTypesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypesInput"></a>

```csharp
public string[] EntityTypesInput { get; }
```

- *Type:* string[]

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes"></a>

```csharp
public string[] EntityTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationEntityDetectorConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---


### DatabrewJobProfileConfigurationOutputReference <a name="DatabrewJobProfileConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations">PutColumnStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration">PutDatasetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration">PutEntityDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns">PutProfileColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetColumnStatisticsConfigurations">ResetColumnStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetDatasetStatisticsConfiguration">ResetDatasetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetEntityDetectorConfiguration">ResetEntityDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetProfileColumns">ResetProfileColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnStatisticsConfigurations` <a name="PutColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations"></a>

```csharp
private void PutColumnStatisticsConfigurations(IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]

---

##### `PutDatasetStatisticsConfiguration` <a name="PutDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration"></a>

```csharp
private void PutDatasetStatisticsConfiguration(DatabrewJobProfileConfigurationDatasetStatisticsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---

##### `PutEntityDetectorConfiguration` <a name="PutEntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration"></a>

```csharp
private void PutEntityDetectorConfiguration(DatabrewJobProfileConfigurationEntityDetectorConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---

##### `PutProfileColumns` <a name="PutProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns"></a>

```csharp
private void PutProfileColumns(IResolvable|DatabrewJobProfileConfigurationProfileColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]

---

##### `ResetColumnStatisticsConfigurations` <a name="ResetColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetColumnStatisticsConfigurations"></a>

```csharp
private void ResetColumnStatisticsConfigurations()
```

##### `ResetDatasetStatisticsConfiguration` <a name="ResetDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetDatasetStatisticsConfiguration"></a>

```csharp
private void ResetDatasetStatisticsConfiguration()
```

##### `ResetEntityDetectorConfiguration` <a name="ResetEntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetEntityDetectorConfiguration"></a>

```csharp
private void ResetEntityDetectorConfiguration()
```

##### `ResetProfileColumns` <a name="ResetProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetProfileColumns"></a>

```csharp
private void ResetProfileColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations">ColumnStatisticsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration">DatasetStatisticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration">EntityDetectorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumns">ProfileColumns</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList">DatabrewJobProfileConfigurationProfileColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurationsInput">ColumnStatisticsConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfigurationInput">DatasetStatisticsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfigurationInput">EntityDetectorConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumnsInput">ProfileColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnStatisticsConfigurations`<sup>Required</sup> <a name="ColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations"></a>

```csharp
public DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList ColumnStatisticsConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a>

---

##### `DatasetStatisticsConfiguration`<sup>Required</sup> <a name="DatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration"></a>

```csharp
public DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference DatasetStatisticsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a>

---

##### `EntityDetectorConfiguration`<sup>Required</sup> <a name="EntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration"></a>

```csharp
public DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference EntityDetectorConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a>

---

##### `ProfileColumns`<sup>Required</sup> <a name="ProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumns"></a>

```csharp
public DatabrewJobProfileConfigurationProfileColumnsList ProfileColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList">DatabrewJobProfileConfigurationProfileColumnsList</a>

---

##### `ColumnStatisticsConfigurationsInput`<sup>Optional</sup> <a name="ColumnStatisticsConfigurationsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurationsInput"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationColumnStatisticsConfigurations[] ColumnStatisticsConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]

---

##### `DatasetStatisticsConfigurationInput`<sup>Optional</sup> <a name="DatasetStatisticsConfigurationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfigurationInput"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationDatasetStatisticsConfiguration DatasetStatisticsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---

##### `EntityDetectorConfigurationInput`<sup>Optional</sup> <a name="EntityDetectorConfigurationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfigurationInput"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationEntityDetectorConfiguration EntityDetectorConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---

##### `ProfileColumnsInput`<sup>Optional</sup> <a name="ProfileColumnsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumnsInput"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationProfileColumns[] ProfileColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---


### DatabrewJobProfileConfigurationProfileColumnsList <a name="DatabrewJobProfileConfigurationProfileColumnsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationProfileColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get"></a>

```csharp
private DatabrewJobProfileConfigurationProfileColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationProfileColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]

---


### DatabrewJobProfileConfigurationProfileColumnsOutputReference <a name="DatabrewJobProfileConfigurationProfileColumnsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobProfileConfigurationProfileColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobProfileConfigurationProfileColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>

---


### DatabrewJobRecipeOutputReference <a name="DatabrewJobRecipeOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobRecipeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobRecipe InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---


### DatabrewJobTagsList <a name="DatabrewJobTagsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get"></a>

```csharp
private DatabrewJobTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]

---


### DatabrewJobTagsOutputReference <a name="DatabrewJobTagsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>

---


### DatabrewJobValidationConfigurationsList <a name="DatabrewJobValidationConfigurationsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobValidationConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get"></a>

```csharp
private DatabrewJobValidationConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobValidationConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]

---


### DatabrewJobValidationConfigurationsOutputReference <a name="DatabrewJobValidationConfigurationsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewJobValidationConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetRulesetArn">ResetRulesetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetValidationMode">ResetValidationMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRulesetArn` <a name="ResetRulesetArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetRulesetArn"></a>

```csharp
private void ResetRulesetArn()
```

##### `ResetValidationMode` <a name="ResetValidationMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetValidationMode"></a>

```csharp
private void ResetValidationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArnInput">RulesetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationModeInput">ValidationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArn">RulesetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationMode">ValidationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RulesetArnInput`<sup>Optional</sup> <a name="RulesetArnInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArnInput"></a>

```csharp
public string RulesetArnInput { get; }
```

- *Type:* string

---

##### `ValidationModeInput`<sup>Optional</sup> <a name="ValidationModeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationModeInput"></a>

```csharp
public string ValidationModeInput { get; }
```

- *Type:* string

---

##### `RulesetArn`<sup>Required</sup> <a name="RulesetArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArn"></a>

```csharp
public string RulesetArn { get; }
```

- *Type:* string

---

##### `ValidationMode`<sup>Required</sup> <a name="ValidationMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationMode"></a>

```csharp
public string ValidationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewJobValidationConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>

---



