# `datazoneDataSource` Submodule <a name="`datazoneDataSource` Submodule" id="@cdktn/provider-awscc.datazoneDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneDataSource <a name="DatazoneDataSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source awscc_datazone_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSource(Construct Scope, string Id, DatazoneDataSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig">DatazoneDataSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig">DatazoneDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput">PutAssetFormsInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation">PutRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetAssetFormsInput">ResetAssetFormsInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConnectionIdentifier">ResetConnectionIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnableSetting">ResetEnableSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnvironmentIdentifier">ResetEnvironmentIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetPublishOnImport">ResetPublishOnImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetRecommendation">ResetRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssetFormsInput` <a name="PutAssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput"></a>

```csharp
private void PutAssetFormsInput(IResolvable|DatazoneDataSourceAssetFormsInput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration"></a>

```csharp
private void PutConfiguration(DatazoneDataSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

---

##### `PutRecommendation` <a name="PutRecommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation"></a>

```csharp
private void PutRecommendation(DatazoneDataSourceRecommendation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule"></a>

```csharp
private void PutSchedule(DatazoneDataSourceSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

---

##### `ResetAssetFormsInput` <a name="ResetAssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetAssetFormsInput"></a>

```csharp
private void ResetAssetFormsInput()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetConnectionIdentifier` <a name="ResetConnectionIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConnectionIdentifier"></a>

```csharp
private void ResetConnectionIdentifier()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableSetting` <a name="ResetEnableSetting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnableSetting"></a>

```csharp
private void ResetEnableSetting()
```

##### `ResetEnvironmentIdentifier` <a name="ResetEnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnvironmentIdentifier"></a>

```csharp
private void ResetEnvironmentIdentifier()
```

##### `ResetPublishOnImport` <a name="ResetPublishOnImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetPublishOnImport"></a>

```csharp
private void ResetPublishOnImport()
```

##### `ResetRecommendation` <a name="ResetRecommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetRecommendation"></a>

```csharp
private void ResetRecommendation()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneDataSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneDataSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneDataSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneDataSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatazoneDataSource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneDataSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInput">AssetFormsInput</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList">DatazoneDataSourceAssetFormsInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference">DatazoneDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAssetCount">LastRunAssetCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAt">LastRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunStatus">LastRunStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendation">Recommendation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference">DatazoneDataSourceRecommendationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference">DatazoneDataSourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInputInput">AssetFormsInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifierInput">ConnectionIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSettingInput">EnableSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifierInput">EnvironmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifierInput">ProjectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImportInput">PublishOnImportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendationInput">RecommendationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifier">ConnectionIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSetting">EnableSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImport">PublishOnImport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssetFormsInput`<sup>Required</sup> <a name="AssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInput"></a>

```csharp
public DatazoneDataSourceAssetFormsInputList AssetFormsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList">DatazoneDataSourceAssetFormsInputList</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configuration"></a>

```csharp
public DatazoneDataSourceConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference">DatazoneDataSourceConfigurationOutputReference</a>

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastRunAssetCount`<sup>Required</sup> <a name="LastRunAssetCount" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAssetCount"></a>

```csharp
public double LastRunAssetCount { get; }
```

- *Type:* double

---

##### `LastRunAt`<sup>Required</sup> <a name="LastRunAt" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAt"></a>

```csharp
public string LastRunAt { get; }
```

- *Type:* string

---

##### `LastRunStatus`<sup>Required</sup> <a name="LastRunStatus" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunStatus"></a>

```csharp
public string LastRunStatus { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendation"></a>

```csharp
public DatazoneDataSourceRecommendationOutputReference Recommendation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference">DatazoneDataSourceRecommendationOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.schedule"></a>

```csharp
public DatazoneDataSourceScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference">DatazoneDataSourceScheduleOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AssetFormsInputInput`<sup>Optional</sup> <a name="AssetFormsInputInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInputInput"></a>

```csharp
public IResolvable|DatazoneDataSourceAssetFormsInput[] AssetFormsInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configurationInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

---

##### `ConnectionIdentifierInput`<sup>Optional</sup> <a name="ConnectionIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifierInput"></a>

```csharp
public string ConnectionIdentifierInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifierInput"></a>

```csharp
public string DomainIdentifierInput { get; }
```

- *Type:* string

---

##### `EnableSettingInput`<sup>Optional</sup> <a name="EnableSettingInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSettingInput"></a>

```csharp
public string EnableSettingInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdentifierInput`<sup>Optional</sup> <a name="EnvironmentIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifierInput"></a>

```csharp
public string EnvironmentIdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdentifierInput`<sup>Optional</sup> <a name="ProjectIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifierInput"></a>

```csharp
public string ProjectIdentifierInput { get; }
```

- *Type:* string

---

##### `PublishOnImportInput`<sup>Optional</sup> <a name="PublishOnImportInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImportInput"></a>

```csharp
public bool|IResolvable PublishOnImportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RecommendationInput`<sup>Optional</sup> <a name="RecommendationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendationInput"></a>

```csharp
public IResolvable|DatazoneDataSourceRecommendation RecommendationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.scheduleInput"></a>

```csharp
public IResolvable|DatazoneDataSourceSchedule ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ConnectionIdentifier`<sup>Required</sup> <a name="ConnectionIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifier"></a>

```csharp
public string ConnectionIdentifier { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `EnableSetting`<sup>Required</sup> <a name="EnableSetting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSetting"></a>

```csharp
public string EnableSetting { get; }
```

- *Type:* string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; }
```

- *Type:* string

---

##### `PublishOnImport`<sup>Required</sup> <a name="PublishOnImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImport"></a>

```csharp
public bool|IResolvable PublishOnImport { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneDataSourceAssetFormsInput <a name="DatazoneDataSourceAssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceAssetFormsInput {
    string Content = null,
    string FormName = null,
    string TypeIdentifier = null,
    string TypeRevision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.content">Content</a></code> | <code>string</code> | The content of the metadata form. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.formName">FormName</a></code> | <code>string</code> | The name of the metadata form. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeIdentifier">TypeIdentifier</a></code> | <code>string</code> | The ID of the metadata form type. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeRevision">TypeRevision</a></code> | <code>string</code> | The revision of the metadata form type. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The content of the metadata form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#content DatazoneDataSource#content}

---

##### `FormName`<sup>Optional</sup> <a name="FormName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.formName"></a>

```csharp
public string FormName { get; set; }
```

- *Type:* string

The name of the metadata form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#form_name DatazoneDataSource#form_name}

---

##### `TypeIdentifier`<sup>Optional</sup> <a name="TypeIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeIdentifier"></a>

```csharp
public string TypeIdentifier { get; set; }
```

- *Type:* string

The ID of the metadata form type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#type_identifier DatazoneDataSource#type_identifier}

---

##### `TypeRevision`<sup>Optional</sup> <a name="TypeRevision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeRevision"></a>

```csharp
public string TypeRevision { get; set; }
```

- *Type:* string

The revision of the metadata form type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#type_revision DatazoneDataSource#type_revision}

---

### DatazoneDataSourceConfig <a name="DatazoneDataSourceConfig" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainIdentifier,
    string Name,
    string ProjectIdentifier,
    string Type,
    IResolvable|DatazoneDataSourceAssetFormsInput[] AssetFormsInput = null,
    DatazoneDataSourceConfiguration Configuration = null,
    string ConnectionIdentifier = null,
    string Description = null,
    string EnableSetting = null,
    string EnvironmentIdentifier = null,
    bool|IResolvable PublishOnImport = null,
    DatazoneDataSourceRecommendation Recommendation = null,
    DatazoneDataSourceSchedule Schedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | The ID of the Amazon DataZone domain where the data source is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.name">Name</a></code> | <code>string</code> | The name of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | The identifier of the Amazon DataZone project in which you want to add the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.type">Type</a></code> | <code>string</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.assetFormsInput">AssetFormsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]</code> | The metadata forms that are to be attached to the assets that this data source works with. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connectionIdentifier">ConnectionIdentifier</a></code> | <code>string</code> | The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.description">Description</a></code> | <code>string</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.enableSetting">EnableSetting</a></code> | <code>string</code> | Specifies whether the data source is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | The unique identifier of the Amazon DataZone environment to which the data source publishes assets. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.publishOnImport">PublishOnImport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.recommendation">Recommendation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | Specifies whether the business name generation is to be enabled for this data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | The schedule of the data source runs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; set; }
```

- *Type:* string

The ID of the Amazon DataZone domain where the data source is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#domain_identifier DatazoneDataSource#domain_identifier}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#name DatazoneDataSource#name}

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; set; }
```

- *Type:* string

The identifier of the Amazon DataZone project in which you want to add the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#project_identifier DatazoneDataSource#project_identifier}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

##### `AssetFormsInput`<sup>Optional</sup> <a name="AssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.assetFormsInput"></a>

```csharp
public IResolvable|DatazoneDataSourceAssetFormsInput[] AssetFormsInput { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]

The metadata forms that are to be attached to the assets that this data source works with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#asset_forms_input DatazoneDataSource#asset_forms_input}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.configuration"></a>

```csharp
public DatazoneDataSourceConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#configuration DatazoneDataSource#configuration}

---

##### `ConnectionIdentifier`<sup>Optional</sup> <a name="ConnectionIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connectionIdentifier"></a>

```csharp
public string ConnectionIdentifier { get; set; }
```

- *Type:* string

The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#connection_identifier DatazoneDataSource#connection_identifier}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#description DatazoneDataSource#description}

---

##### `EnableSetting`<sup>Optional</sup> <a name="EnableSetting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.enableSetting"></a>

```csharp
public string EnableSetting { get; set; }
```

- *Type:* string

Specifies whether the data source is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#enable_setting DatazoneDataSource#enable_setting}

---

##### `EnvironmentIdentifier`<sup>Optional</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; set; }
```

- *Type:* string

The unique identifier of the Amazon DataZone environment to which the data source publishes assets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#environment_identifier DatazoneDataSource#environment_identifier}

---

##### `PublishOnImport`<sup>Optional</sup> <a name="PublishOnImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.publishOnImport"></a>

```csharp
public bool|IResolvable PublishOnImport { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#publish_on_import DatazoneDataSource#publish_on_import}

---

##### `Recommendation`<sup>Optional</sup> <a name="Recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.recommendation"></a>

```csharp
public DatazoneDataSourceRecommendation Recommendation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

Specifies whether the business name generation is to be enabled for this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#recommendation DatazoneDataSource#recommendation}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.schedule"></a>

```csharp
public DatazoneDataSourceSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

The schedule of the data source runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#schedule DatazoneDataSource#schedule}

---

### DatazoneDataSourceConfiguration <a name="DatazoneDataSourceConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfiguration {
    DatazoneDataSourceConfigurationGlueRunConfiguration GlueRunConfiguration = null,
    DatazoneDataSourceConfigurationRedshiftRunConfiguration RedshiftRunConfiguration = null,
    DatazoneDataSourceConfigurationSageMakerRunConfiguration SageMakerRunConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.glueRunConfiguration">GlueRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#glue_run_configuration DatazoneDataSource#glue_run_configuration}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.redshiftRunConfiguration">RedshiftRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | The configuration details of the Amazon Redshift data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.sageMakerRunConfiguration">SageMakerRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | The configuration details of the Amazon SageMaker data source. |

---

##### `GlueRunConfiguration`<sup>Optional</sup> <a name="GlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.glueRunConfiguration"></a>

```csharp
public DatazoneDataSourceConfigurationGlueRunConfiguration GlueRunConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#glue_run_configuration DatazoneDataSource#glue_run_configuration}.

---

##### `RedshiftRunConfiguration`<sup>Optional</sup> <a name="RedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.redshiftRunConfiguration"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfiguration RedshiftRunConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

The configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#redshift_run_configuration DatazoneDataSource#redshift_run_configuration}

---

##### `SageMakerRunConfiguration`<sup>Optional</sup> <a name="SageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.sageMakerRunConfiguration"></a>

```csharp
public DatazoneDataSourceConfigurationSageMakerRunConfiguration SageMakerRunConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

The configuration details of the Amazon SageMaker data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#sage_maker_run_configuration DatazoneDataSource#sage_maker_run_configuration}

---

### DatazoneDataSourceConfigurationGlueRunConfiguration <a name="DatazoneDataSourceConfigurationGlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationGlueRunConfiguration {
    bool|IResolvable AutoImportDataQualityResult = null,
    string CatalogName = null,
    string DataAccessRole = null,
    IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations[] RelationalFilterConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.autoImportDataQualityResult">AutoImportDataQualityResult</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to automatically import data quality metrics as part of the data source run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.catalogName">CatalogName</a></code> | <code>string</code> | The catalog name in the AWS Glue run configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.dataAccessRole">DataAccessRole</a></code> | <code>string</code> | The data access role included in the configuration details of the AWS Glue data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.relationalFilterConfigurations">RelationalFilterConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]</code> | The relational filter configurations included in the configuration details of the AWS Glue data source. |

---

##### `AutoImportDataQualityResult`<sup>Optional</sup> <a name="AutoImportDataQualityResult" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.autoImportDataQualityResult"></a>

```csharp
public bool|IResolvable AutoImportDataQualityResult { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to automatically import data quality metrics as part of the data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#auto_import_data_quality_result DatazoneDataSource#auto_import_data_quality_result}

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

The catalog name in the AWS Glue run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#catalog_name DatazoneDataSource#catalog_name}

---

##### `DataAccessRole`<sup>Optional</sup> <a name="DataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.dataAccessRole"></a>

```csharp
public string DataAccessRole { get; set; }
```

- *Type:* string

The data access role included in the configuration details of the AWS Glue data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#data_access_role DatazoneDataSource#data_access_role}

---

##### `RelationalFilterConfigurations`<sup>Optional</sup> <a name="RelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.relationalFilterConfigurations"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations[] RelationalFilterConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]

The relational filter configurations included in the configuration details of the AWS Glue data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#relational_filter_configurations DatazoneDataSource#relational_filter_configurations}

---

### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations {
    string DatabaseName = null,
    IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions[] FilterExpressions = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.databaseName">DatabaseName</a></code> | <code>string</code> | The database name specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.filterExpressions">FilterExpressions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | The filter expressions specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.schemaName">SchemaName</a></code> | <code>string</code> | The schema name specified in the relational filter configuration for the data source. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The database name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#database_name DatazoneDataSource#database_name}

---

##### `FilterExpressions`<sup>Optional</sup> <a name="FilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.filterExpressions"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions[] FilterExpressions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

The filter expressions specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#filter_expressions DatazoneDataSource#filter_expressions}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The schema name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#schema_name DatazoneDataSource#schema_name}

---

### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions {
    string Expression = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type">Type</a></code> | <code>string</code> | The search filter expression type. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The search filter expression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

### DatazoneDataSourceConfigurationRedshiftRunConfiguration <a name="DatazoneDataSourceConfigurationRedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfiguration {
    string DataAccessRole = null,
    DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration RedshiftCredentialConfiguration = null,
    DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage RedshiftStorage = null,
    IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations[] RelationalFilterConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.dataAccessRole">DataAccessRole</a></code> | <code>string</code> | The data access role included in the configuration details of the Amazon Redshift data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftCredentialConfiguration">RedshiftCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | The details of the credentials required to access an Amazon Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftStorage">RedshiftStorage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.relationalFilterConfigurations">RelationalFilterConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]</code> | The relational filter configurations included in the configuration details of the Amazon Redshift data source. |

---

##### `DataAccessRole`<sup>Optional</sup> <a name="DataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.dataAccessRole"></a>

```csharp
public string DataAccessRole { get; set; }
```

- *Type:* string

The data access role included in the configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#data_access_role DatazoneDataSource#data_access_role}

---

##### `RedshiftCredentialConfiguration`<sup>Optional</sup> <a name="RedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftCredentialConfiguration"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration RedshiftCredentialConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

The details of the credentials required to access an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#redshift_credential_configuration DatazoneDataSource#redshift_credential_configuration}

---

##### `RedshiftStorage`<sup>Optional</sup> <a name="RedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftStorage"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage RedshiftStorage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#redshift_storage DatazoneDataSource#redshift_storage}

---

##### `RelationalFilterConfigurations`<sup>Optional</sup> <a name="RelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.relationalFilterConfigurations"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations[] RelationalFilterConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]

The relational filter configurations included in the configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#relational_filter_configurations DatazoneDataSource#relational_filter_configurations}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration {
    string SecretManagerArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.property.secretManagerArn">SecretManagerArn</a></code> | <code>string</code> | The ARN of a secret manager for an Amazon Redshift cluster. |

---

##### `SecretManagerArn`<sup>Optional</sup> <a name="SecretManagerArn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.property.secretManagerArn"></a>

```csharp
public string SecretManagerArn { get; set; }
```

- *Type:* string

The ARN of a secret manager for an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#secret_manager_arn DatazoneDataSource#secret_manager_arn}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage {
    DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource RedshiftClusterSource = null,
    DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource RedshiftServerlessSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftClusterSource">RedshiftClusterSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | The name of an Amazon Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftServerlessSource">RedshiftServerlessSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | The details of the Amazon Redshift Serverless workgroup storage. |

---

##### `RedshiftClusterSource`<sup>Optional</sup> <a name="RedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftClusterSource"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource RedshiftClusterSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

The name of an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#redshift_cluster_source DatazoneDataSource#redshift_cluster_source}

---

##### `RedshiftServerlessSource`<sup>Optional</sup> <a name="RedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftServerlessSource"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource RedshiftServerlessSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

The details of the Amazon Redshift Serverless workgroup storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#redshift_serverless_source DatazoneDataSource#redshift_serverless_source}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource {
    string ClusterName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.property.clusterName">ClusterName</a></code> | <code>string</code> | The name of an Amazon Redshift cluster. |

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

The name of an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#cluster_name DatazoneDataSource#cluster_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource {
    string WorkgroupName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | The name of the Amazon Redshift Serverless workgroup. |

---

##### `WorkgroupName`<sup>Optional</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; set; }
```

- *Type:* string

The name of the Amazon Redshift Serverless workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#workgroup_name DatazoneDataSource#workgroup_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations {
    string DatabaseName = null,
    IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions[] FilterExpressions = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.databaseName">DatabaseName</a></code> | <code>string</code> | The database name specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.filterExpressions">FilterExpressions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | The filter expressions specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.schemaName">SchemaName</a></code> | <code>string</code> | The schema name specified in the relational filter configuration for the data source. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The database name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#database_name DatazoneDataSource#database_name}

---

##### `FilterExpressions`<sup>Optional</sup> <a name="FilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.filterExpressions"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions[] FilterExpressions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

The filter expressions specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#filter_expressions DatazoneDataSource#filter_expressions}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The schema name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#schema_name DatazoneDataSource#schema_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions {
    string Expression = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type">Type</a></code> | <code>string</code> | The search filter expression type. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The search filter expression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

### DatazoneDataSourceConfigurationSageMakerRunConfiguration <a name="DatazoneDataSourceConfigurationSageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationSageMakerRunConfiguration {
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> TrackingAssets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.property.trackingAssets">TrackingAssets</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | The tracking assets of the Amazon SageMaker run. |

---

##### `TrackingAssets`<sup>Optional</sup> <a name="TrackingAssets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.property.trackingAssets"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> TrackingAssets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

The tracking assets of the Amazon SageMaker run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#tracking_assets DatazoneDataSource#tracking_assets}

---

### DatazoneDataSourceRecommendation <a name="DatazoneDataSourceRecommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceRecommendation {
    bool|IResolvable EnableBusinessNameGeneration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.property.enableBusinessNameGeneration">EnableBusinessNameGeneration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration. |

---

##### `EnableBusinessNameGeneration`<sup>Optional</sup> <a name="EnableBusinessNameGeneration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.property.enableBusinessNameGeneration"></a>

```csharp
public bool|IResolvable EnableBusinessNameGeneration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#enable_business_name_generation DatazoneDataSource#enable_business_name_generation}

---

### DatazoneDataSourceSchedule <a name="DatazoneDataSourceSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceSchedule {
    string Schedule = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.schedule">Schedule</a></code> | <code>string</code> | The schedule of the data source runs. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.timezone">Timezone</a></code> | <code>string</code> | The timezone of the data source run. |

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

The schedule of the data source runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#schedule DatazoneDataSource#schedule}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

The timezone of the data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_data_source#timezone DatazoneDataSource#timezone}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneDataSourceAssetFormsInputList <a name="DatazoneDataSourceAssetFormsInputList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceAssetFormsInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get"></a>

```csharp
private DatazoneDataSourceAssetFormsInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceAssetFormsInput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]

---


### DatazoneDataSourceAssetFormsInputOutputReference <a name="DatazoneDataSourceAssetFormsInputOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceAssetFormsInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetFormName">ResetFormName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeIdentifier">ResetTypeIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeRevision">ResetTypeRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetFormName` <a name="ResetFormName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetFormName"></a>

```csharp
private void ResetFormName()
```

##### `ResetTypeIdentifier` <a name="ResetTypeIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeIdentifier"></a>

```csharp
private void ResetTypeIdentifier()
```

##### `ResetTypeRevision` <a name="ResetTypeRevision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeRevision"></a>

```csharp
private void ResetTypeRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formNameInput">FormNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifierInput">TypeIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevisionInput">TypeRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formName">FormName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifier">TypeIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevision">TypeRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FormNameInput`<sup>Optional</sup> <a name="FormNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formNameInput"></a>

```csharp
public string FormNameInput { get; }
```

- *Type:* string

---

##### `TypeIdentifierInput`<sup>Optional</sup> <a name="TypeIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifierInput"></a>

```csharp
public string TypeIdentifierInput { get; }
```

- *Type:* string

---

##### `TypeRevisionInput`<sup>Optional</sup> <a name="TypeRevisionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevisionInput"></a>

```csharp
public string TypeRevisionInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `FormName`<sup>Required</sup> <a name="FormName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formName"></a>

```csharp
public string FormName { get; }
```

- *Type:* string

---

##### `TypeIdentifier`<sup>Required</sup> <a name="TypeIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifier"></a>

```csharp
public string TypeIdentifier { get; }
```

- *Type:* string

---

##### `TypeRevision`<sup>Required</sup> <a name="TypeRevision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevision"></a>

```csharp
public string TypeRevision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceAssetFormsInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>

---


### DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations">PutRelationalFilterConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetAutoImportDataQualityResult">ResetAutoImportDataQualityResult</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetDataAccessRole">ResetDataAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetRelationalFilterConfigurations">ResetRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRelationalFilterConfigurations` <a name="PutRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations"></a>

```csharp
private void PutRelationalFilterConfigurations(IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]

---

##### `ResetAutoImportDataQualityResult` <a name="ResetAutoImportDataQualityResult" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetAutoImportDataQualityResult"></a>

```csharp
private void ResetAutoImportDataQualityResult()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetDataAccessRole` <a name="ResetDataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetDataAccessRole"></a>

```csharp
private void ResetDataAccessRole()
```

##### `ResetRelationalFilterConfigurations` <a name="ResetRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetRelationalFilterConfigurations"></a>

```csharp
private void ResetRelationalFilterConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurations">RelationalFilterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResultInput">AutoImportDataQualityResultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRoleInput">DataAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurationsInput">RelationalFilterConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResult">AutoImportDataQualityResult</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRole">DataAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RelationalFilterConfigurations`<sup>Required</sup> <a name="RelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurations"></a>

```csharp
public DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList RelationalFilterConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList</a>

---

##### `AutoImportDataQualityResultInput`<sup>Optional</sup> <a name="AutoImportDataQualityResultInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResultInput"></a>

```csharp
public bool|IResolvable AutoImportDataQualityResultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `DataAccessRoleInput`<sup>Optional</sup> <a name="DataAccessRoleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRoleInput"></a>

```csharp
public string DataAccessRoleInput { get; }
```

- *Type:* string

---

##### `RelationalFilterConfigurationsInput`<sup>Optional</sup> <a name="RelationalFilterConfigurationsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurationsInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations[] RelationalFilterConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]

---

##### `AutoImportDataQualityResult`<sup>Required</sup> <a name="AutoImportDataQualityResult" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResult"></a>

```csharp
public bool|IResolvable AutoImportDataQualityResult { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `DataAccessRole`<sup>Required</sup> <a name="DataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRole"></a>

```csharp
public string DataAccessRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationGlueRunConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get"></a>

```csharp
private DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get"></a>

```csharp
private DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions">PutFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions">ResetFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterExpressions` <a name="PutFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions"></a>

```csharp
private void PutFilterExpressions(IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetFilterExpressions` <a name="ResetFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions"></a>

```csharp
private void ResetFilterExpressions()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions">FilterExpressions</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput">FilterExpressionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterExpressions`<sup>Required</sup> <a name="FilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions"></a>

```csharp
public DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList FilterExpressions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `FilterExpressionsInput`<sup>Optional</sup> <a name="FilterExpressionsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions[] FilterExpressionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>

---


### DatazoneDataSourceConfigurationOutputReference <a name="DatazoneDataSourceConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration">PutGlueRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration">PutRedshiftRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration">PutSageMakerRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetGlueRunConfiguration">ResetGlueRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetRedshiftRunConfiguration">ResetRedshiftRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetSageMakerRunConfiguration">ResetSageMakerRunConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlueRunConfiguration` <a name="PutGlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration"></a>

```csharp
private void PutGlueRunConfiguration(DatazoneDataSourceConfigurationGlueRunConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

---

##### `PutRedshiftRunConfiguration` <a name="PutRedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration"></a>

```csharp
private void PutRedshiftRunConfiguration(DatazoneDataSourceConfigurationRedshiftRunConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

---

##### `PutSageMakerRunConfiguration` <a name="PutSageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration"></a>

```csharp
private void PutSageMakerRunConfiguration(DatazoneDataSourceConfigurationSageMakerRunConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

---

##### `ResetGlueRunConfiguration` <a name="ResetGlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetGlueRunConfiguration"></a>

```csharp
private void ResetGlueRunConfiguration()
```

##### `ResetRedshiftRunConfiguration` <a name="ResetRedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetRedshiftRunConfiguration"></a>

```csharp
private void ResetRedshiftRunConfiguration()
```

##### `ResetSageMakerRunConfiguration` <a name="ResetSageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetSageMakerRunConfiguration"></a>

```csharp
private void ResetSageMakerRunConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfiguration">GlueRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference">DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfiguration">RedshiftRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfiguration">SageMakerRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference">DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfigurationInput">GlueRunConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfigurationInput">RedshiftRunConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfigurationInput">SageMakerRunConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlueRunConfiguration`<sup>Required</sup> <a name="GlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfiguration"></a>

```csharp
public DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference GlueRunConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference">DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference</a>

---

##### `RedshiftRunConfiguration`<sup>Required</sup> <a name="RedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfiguration"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference RedshiftRunConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference</a>

---

##### `SageMakerRunConfiguration`<sup>Required</sup> <a name="SageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfiguration"></a>

```csharp
public DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference SageMakerRunConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference">DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference</a>

---

##### `GlueRunConfigurationInput`<sup>Optional</sup> <a name="GlueRunConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfigurationInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationGlueRunConfiguration GlueRunConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

---

##### `RedshiftRunConfigurationInput`<sup>Optional</sup> <a name="RedshiftRunConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfigurationInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfiguration RedshiftRunConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

---

##### `SageMakerRunConfigurationInput`<sup>Optional</sup> <a name="SageMakerRunConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfigurationInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationSageMakerRunConfiguration SageMakerRunConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration">PutRedshiftCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage">PutRedshiftStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations">PutRelationalFilterConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetDataAccessRole">ResetDataAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftCredentialConfiguration">ResetRedshiftCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftStorage">ResetRedshiftStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRelationalFilterConfigurations">ResetRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRedshiftCredentialConfiguration` <a name="PutRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration"></a>

```csharp
private void PutRedshiftCredentialConfiguration(DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

---

##### `PutRedshiftStorage` <a name="PutRedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage"></a>

```csharp
private void PutRedshiftStorage(DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

---

##### `PutRelationalFilterConfigurations` <a name="PutRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations"></a>

```csharp
private void PutRelationalFilterConfigurations(IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]

---

##### `ResetDataAccessRole` <a name="ResetDataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetDataAccessRole"></a>

```csharp
private void ResetDataAccessRole()
```

##### `ResetRedshiftCredentialConfiguration` <a name="ResetRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftCredentialConfiguration"></a>

```csharp
private void ResetRedshiftCredentialConfiguration()
```

##### `ResetRedshiftStorage` <a name="ResetRedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftStorage"></a>

```csharp
private void ResetRedshiftStorage()
```

##### `ResetRelationalFilterConfigurations` <a name="ResetRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRelationalFilterConfigurations"></a>

```csharp
private void ResetRelationalFilterConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfiguration">RedshiftCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorage">RedshiftStorage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurations">RelationalFilterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRoleInput">DataAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfigurationInput">RedshiftCredentialConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorageInput">RedshiftStorageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurationsInput">RelationalFilterConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRole">DataAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedshiftCredentialConfiguration`<sup>Required</sup> <a name="RedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfiguration"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference RedshiftCredentialConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference</a>

---

##### `RedshiftStorage`<sup>Required</sup> <a name="RedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorage"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference RedshiftStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference</a>

---

##### `RelationalFilterConfigurations`<sup>Required</sup> <a name="RelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurations"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList RelationalFilterConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList</a>

---

##### `DataAccessRoleInput`<sup>Optional</sup> <a name="DataAccessRoleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRoleInput"></a>

```csharp
public string DataAccessRoleInput { get; }
```

- *Type:* string

---

##### `RedshiftCredentialConfigurationInput`<sup>Optional</sup> <a name="RedshiftCredentialConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfigurationInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration RedshiftCredentialConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

---

##### `RedshiftStorageInput`<sup>Optional</sup> <a name="RedshiftStorageInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorageInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage RedshiftStorageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

---

##### `RelationalFilterConfigurationsInput`<sup>Optional</sup> <a name="RelationalFilterConfigurationsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurationsInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations[] RelationalFilterConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]

---

##### `DataAccessRole`<sup>Required</sup> <a name="DataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRole"></a>

```csharp
public string DataAccessRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resetSecretManagerArn">ResetSecretManagerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretManagerArn` <a name="ResetSecretManagerArn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resetSecretManagerArn"></a>

```csharp
private void ResetSecretManagerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArnInput">SecretManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArn">SecretManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretManagerArnInput`<sup>Optional</sup> <a name="SecretManagerArnInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArnInput"></a>

```csharp
public string SecretManagerArnInput { get; }
```

- *Type:* string

---

##### `SecretManagerArn`<sup>Required</sup> <a name="SecretManagerArn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArn"></a>

```csharp
public string SecretManagerArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource">PutRedshiftClusterSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource">PutRedshiftServerlessSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftClusterSource">ResetRedshiftClusterSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftServerlessSource">ResetRedshiftServerlessSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRedshiftClusterSource` <a name="PutRedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource"></a>

```csharp
private void PutRedshiftClusterSource(DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

---

##### `PutRedshiftServerlessSource` <a name="PutRedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource"></a>

```csharp
private void PutRedshiftServerlessSource(DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

---

##### `ResetRedshiftClusterSource` <a name="ResetRedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftClusterSource"></a>

```csharp
private void ResetRedshiftClusterSource()
```

##### `ResetRedshiftServerlessSource` <a name="ResetRedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftServerlessSource"></a>

```csharp
private void ResetRedshiftServerlessSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSource">RedshiftClusterSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSource">RedshiftServerlessSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSourceInput">RedshiftClusterSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSourceInput">RedshiftServerlessSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedshiftClusterSource`<sup>Required</sup> <a name="RedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSource"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference RedshiftClusterSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference</a>

---

##### `RedshiftServerlessSource`<sup>Required</sup> <a name="RedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSource"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference RedshiftServerlessSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference</a>

---

##### `RedshiftClusterSourceInput`<sup>Optional</sup> <a name="RedshiftClusterSourceInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSourceInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource RedshiftClusterSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

---

##### `RedshiftServerlessSourceInput`<sup>Optional</sup> <a name="RedshiftServerlessSourceInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSourceInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource RedshiftServerlessSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resetClusterName"></a>

```csharp
private void ResetClusterName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resetWorkgroupName">ResetWorkgroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkgroupName` <a name="ResetWorkgroupName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resetWorkgroupName"></a>

```csharp
private void ResetWorkgroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupNameInput">WorkgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkgroupNameInput`<sup>Optional</sup> <a name="WorkgroupNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupNameInput"></a>

```csharp
public string WorkgroupNameInput { get; }
```

- *Type:* string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get"></a>

```csharp
private DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get"></a>

```csharp
private DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions">PutFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions">ResetFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterExpressions` <a name="PutFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions"></a>

```csharp
private void PutFilterExpressions(IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetFilterExpressions` <a name="ResetFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions"></a>

```csharp
private void ResetFilterExpressions()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions">FilterExpressions</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput">FilterExpressionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterExpressions`<sup>Required</sup> <a name="FilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions"></a>

```csharp
public DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList FilterExpressions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `FilterExpressionsInput`<sup>Optional</sup> <a name="FilterExpressionsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions[] FilterExpressionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>

---


### DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resetTrackingAssets">ResetTrackingAssets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTrackingAssets` <a name="ResetTrackingAssets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resetTrackingAssets"></a>

```csharp
private void ResetTrackingAssets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssetsInput">TrackingAssetsInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssets">TrackingAssets</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrackingAssetsInput`<sup>Optional</sup> <a name="TrackingAssetsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssetsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> TrackingAssetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `TrackingAssets`<sup>Required</sup> <a name="TrackingAssets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssets"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> TrackingAssets { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceConfigurationSageMakerRunConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

---


### DatazoneDataSourceRecommendationOutputReference <a name="DatazoneDataSourceRecommendationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceRecommendationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resetEnableBusinessNameGeneration">ResetEnableBusinessNameGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableBusinessNameGeneration` <a name="ResetEnableBusinessNameGeneration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resetEnableBusinessNameGeneration"></a>

```csharp
private void ResetEnableBusinessNameGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGenerationInput">EnableBusinessNameGenerationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGeneration">EnableBusinessNameGeneration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableBusinessNameGenerationInput`<sup>Optional</sup> <a name="EnableBusinessNameGenerationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGenerationInput"></a>

```csharp
public bool|IResolvable EnableBusinessNameGenerationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableBusinessNameGeneration`<sup>Required</sup> <a name="EnableBusinessNameGeneration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGeneration"></a>

```csharp
public bool|IResolvable EnableBusinessNameGeneration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceRecommendation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

---


### DatazoneDataSourceScheduleOutputReference <a name="DatazoneDataSourceScheduleOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneDataSourceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneDataSourceSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

---



