# `glueMlTransform` Submodule <a name="`glueMlTransform` Submodule" id="@cdktn/provider-awscc.glueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueMlTransform <a name="GlueMlTransform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform awscc_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransform(Construct Scope, string Id, GlueMlTransformConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables">PutInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption">PutTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters">PutTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTransformEncryption">ResetTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputRecordTables` <a name="PutInputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables"></a>

```csharp
private void PutInputRecordTables(GlueMlTransformInputRecordTables Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---

##### `PutTransformEncryption` <a name="PutTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption"></a>

```csharp
private void PutTransformEncryption(GlueMlTransformTransformEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---

##### `PutTransformParameters` <a name="PutTransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters"></a>

```csharp
private void PutTransformParameters(GlueMlTransformTransformParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetGlueVersion"></a>

```csharp
private void ResetGlueVersion()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetNumberOfWorkers"></a>

```csharp
private void ResetNumberOfWorkers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTransformEncryption` <a name="ResetTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTransformEncryption"></a>

```csharp
private void ResetTransformEncryption()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetWorkerType"></a>

```csharp
private void ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueMlTransform resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueMlTransform.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueMlTransform.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueMlTransform.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueMlTransform.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueMlTransform resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueMlTransform to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueMlTransform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueMlTransform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTables">InputRecordTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference">GlueMlTransformInputRecordTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryption">TransformEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference">GlueMlTransformTransformEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformId">TransformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParameters">TransformParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference">GlueMlTransformTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersionInput">GlueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput">InputRecordTablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryptionInput">TransformEncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParametersInput">TransformParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerTypeInput">WorkerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersion">GlueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerType">WorkerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputRecordTables`<sup>Required</sup> <a name="InputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTables"></a>

```csharp
public GlueMlTransformInputRecordTablesOutputReference InputRecordTables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference">GlueMlTransformInputRecordTablesOutputReference</a>

---

##### `TransformEncryption`<sup>Required</sup> <a name="TransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryption"></a>

```csharp
public GlueMlTransformTransformEncryptionOutputReference TransformEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference">GlueMlTransformTransformEncryptionOutputReference</a>

---

##### `TransformId`<sup>Required</sup> <a name="TransformId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformId"></a>

```csharp
public string TransformId { get; }
```

- *Type:* string

---

##### `TransformParameters`<sup>Required</sup> <a name="TransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParameters"></a>

```csharp
public GlueMlTransformTransformParametersOutputReference TransformParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference">GlueMlTransformTransformParametersOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersionInput"></a>

```csharp
public string GlueVersionInput { get; }
```

- *Type:* string

---

##### `InputRecordTablesInput`<sup>Optional</sup> <a name="InputRecordTablesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput"></a>

```csharp
public IResolvable|GlueMlTransformInputRecordTables InputRecordTablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput"></a>

```csharp
public double NumberOfWorkersInput { get; }
```

- *Type:* double

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TransformEncryptionInput`<sup>Optional</sup> <a name="TransformEncryptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryptionInput"></a>

```csharp
public IResolvable|GlueMlTransformTransformEncryption TransformEncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---

##### `TransformParametersInput`<sup>Optional</sup> <a name="TransformParametersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParametersInput"></a>

```csharp
public IResolvable|GlueMlTransformTransformParameters TransformParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerTypeInput"></a>

```csharp
public string WorkerTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersion"></a>

```csharp
public string GlueVersion { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; }
```

- *Type:* double

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerType"></a>

```csharp
public string WorkerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueMlTransformConfig <a name="GlueMlTransformConfig" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GlueMlTransformInputRecordTables InputRecordTables,
    string Role,
    GlueMlTransformTransformParameters TransformParameters,
    string Description = null,
    string GlueVersion = null,
    double MaxCapacity = null,
    double MaxRetries = null,
    string Name = null,
    double NumberOfWorkers = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double Timeout = null,
    GlueMlTransformTransformEncryption TransformEncryption = null,
    string WorkerType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables">InputRecordTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | A list of AWS Glue table definitions used by the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.role">Role</a></code> | <code>string</code> | The name or ARN of the IAM role with the required permissions. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformParameters">TransformParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | The algorithm-specific parameters that are associated with the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.description">Description</a></code> | <code>string</code> | A user-defined, long-form description text for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.glueVersion">GlueVersion</a></code> | <code>string</code> | The version of AWS Glue this machine learning transform is compatible with. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | The number of AWS Glue DPUs allocated to task runs for this transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | The maximum number of times to retry after an MLTaskRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | The number of workers of a defined workerType that are allocated when a task runs. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags to use with this machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.timeout">Timeout</a></code> | <code>double</code> | The timeout in minutes of the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformEncryption">TransformEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | The encryption-at-rest settings of the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.workerType">WorkerType</a></code> | <code>string</code> | The type of predefined worker that is allocated when a task runs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InputRecordTables`<sup>Required</sup> <a name="InputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables"></a>

```csharp
public GlueMlTransformInputRecordTables InputRecordTables { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

A list of AWS Glue table definitions used by the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The name or ARN of the IAM role with the required permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#role GlueMlTransform#role}

---

##### `TransformParameters`<sup>Required</sup> <a name="TransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformParameters"></a>

```csharp
public GlueMlTransformTransformParameters TransformParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

The algorithm-specific parameters that are associated with the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#transform_parameters GlueMlTransform#transform_parameters}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A user-defined, long-form description text for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#description GlueMlTransform#description}

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.glueVersion"></a>

```csharp
public string GlueVersion { get; set; }
```

- *Type:* string

The version of AWS Glue this machine learning transform is compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#glue_version GlueMlTransform#glue_version}

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

The number of AWS Glue DPUs allocated to task runs for this transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

The maximum number of times to retry after an MLTaskRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#max_retries GlueMlTransform#max_retries}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#name GlueMlTransform#name}

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; set; }
```

- *Type:* double

The number of workers of a defined workerType that are allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags to use with this machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#tags GlueMlTransform#tags}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The timeout in minutes of the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#timeout GlueMlTransform#timeout}

---

##### `TransformEncryption`<sup>Optional</sup> <a name="TransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformEncryption"></a>

```csharp
public GlueMlTransformTransformEncryption TransformEncryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

The encryption-at-rest settings of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#transform_encryption GlueMlTransform#transform_encryption}

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.workerType"></a>

```csharp
public string WorkerType { get; set; }
```

- *Type:* string

The type of predefined worker that is allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#worker_type GlueMlTransform#worker_type}

---

### GlueMlTransformInputRecordTables <a name="GlueMlTransformInputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformInputRecordTables {
    IResolvable|GlueMlTransformInputRecordTablesGlueTables[] GlueTables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.property.glueTables">GlueTables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]</code> | The database and table in the AWS Glue Data Catalog that is used for input or output data. |

---

##### `GlueTables`<sup>Optional</sup> <a name="GlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.property.glueTables"></a>

```csharp
public IResolvable|GlueMlTransformInputRecordTablesGlueTables[] GlueTables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]

The database and table in the AWS Glue Data Catalog that is used for input or output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#glue_tables GlueMlTransform#glue_tables}

---

### GlueMlTransformInputRecordTablesGlueTables <a name="GlueMlTransformInputRecordTablesGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformInputRecordTablesGlueTables {
    string CatalogId = null,
    string ConnectionName = null,
    string DatabaseName = null,
    string TableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.catalogId">CatalogId</a></code> | <code>string</code> | A unique identifier for the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.connectionName">ConnectionName</a></code> | <code>string</code> | The name of the connection to the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.databaseName">DatabaseName</a></code> | <code>string</code> | A database name in the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.tableName">TableName</a></code> | <code>string</code> | A table name in the AWS Glue Data Catalog. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

A unique identifier for the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

The name of the connection to the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#connection_name GlueMlTransform#connection_name}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

A database name in the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#database_name GlueMlTransform#database_name}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

A table name in the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#table_name GlueMlTransform#table_name}

---

### GlueMlTransformTransformEncryption <a name="GlueMlTransformTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformTransformEncryption {
    GlueMlTransformTransformEncryptionMlUserDataEncryption MlUserDataEncryption = null,
    string TaskRunSecurityConfigurationName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.mlUserDataEncryption">MlUserDataEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | The encryption-at-rest settings of the transform that apply to accessing user data. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.taskRunSecurityConfigurationName">TaskRunSecurityConfigurationName</a></code> | <code>string</code> | The name of the security configuration. |

---

##### `MlUserDataEncryption`<sup>Optional</sup> <a name="MlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.mlUserDataEncryption"></a>

```csharp
public GlueMlTransformTransformEncryptionMlUserDataEncryption MlUserDataEncryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

The encryption-at-rest settings of the transform that apply to accessing user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#ml_user_data_encryption GlueMlTransform#ml_user_data_encryption}

---

##### `TaskRunSecurityConfigurationName`<sup>Optional</sup> <a name="TaskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.taskRunSecurityConfigurationName"></a>

```csharp
public string TaskRunSecurityConfigurationName { get; set; }
```

- *Type:* string

The name of the security configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#task_run_security_configuration_name GlueMlTransform#task_run_security_configuration_name}

---

### GlueMlTransformTransformEncryptionMlUserDataEncryption <a name="GlueMlTransformTransformEncryptionMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformTransformEncryptionMlUserDataEncryption {
    string KmsKeyId = null,
    string MlUserDataEncryptionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The ID for the customer-provided KMS key. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode">MlUserDataEncryptionMode</a></code> | <code>string</code> | The encryption mode applied to user data. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The ID for the customer-provided KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#kms_key_id GlueMlTransform#kms_key_id}

---

##### `MlUserDataEncryptionMode`<sup>Optional</sup> <a name="MlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode"></a>

```csharp
public string MlUserDataEncryptionMode { get; set; }
```

- *Type:* string

The encryption mode applied to user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#ml_user_data_encryption_mode GlueMlTransform#ml_user_data_encryption_mode}

---

### GlueMlTransformTransformParameters <a name="GlueMlTransformTransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformTransformParameters {
    string TransformType,
    GlueMlTransformTransformParametersFindMatchesParameters FindMatchesParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.transformType">TransformType</a></code> | <code>string</code> | The type of machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.findMatchesParameters">FindMatchesParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | The parameters to configure the find matches transform. |

---

##### `TransformType`<sup>Required</sup> <a name="TransformType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.transformType"></a>

```csharp
public string TransformType { get; set; }
```

- *Type:* string

The type of machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#transform_type GlueMlTransform#transform_type}

---

##### `FindMatchesParameters`<sup>Optional</sup> <a name="FindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.findMatchesParameters"></a>

```csharp
public GlueMlTransformTransformParametersFindMatchesParameters FindMatchesParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

The parameters to configure the find matches transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}

---

### GlueMlTransformTransformParametersFindMatchesParameters <a name="GlueMlTransformTransformParametersFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformTransformParametersFindMatchesParameters {
    double AccuracyCostTradeoff = null,
    bool|IResolvable EnforceProvidedLabels = null,
    double PrecisionRecallTradeoff = null,
    string PrimaryKeyColumnName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.accuracyCostTradeoff">AccuracyCostTradeoff</a></code> | <code>double</code> | The value for accuracy and cost tradeoff. A value of 0.5 means balance. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.enforceProvidedLabels">EnforceProvidedLabels</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, forces the output to match the provided labels. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.precisionRecallTradeoff">PrecisionRecallTradeoff</a></code> | <code>double</code> | The value for precision and recall tradeoff. A value of 0.5 means no preference. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.primaryKeyColumnName">PrimaryKeyColumnName</a></code> | <code>string</code> | The name of a column that uniquely identifies rows in the source table. |

---

##### `AccuracyCostTradeoff`<sup>Optional</sup> <a name="AccuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.accuracyCostTradeoff"></a>

```csharp
public double AccuracyCostTradeoff { get; set; }
```

- *Type:* double

The value for accuracy and cost tradeoff. A value of 0.5 means balance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#accuracy_cost_tradeoff GlueMlTransform#accuracy_cost_tradeoff}

---

##### `EnforceProvidedLabels`<sup>Optional</sup> <a name="EnforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.enforceProvidedLabels"></a>

```csharp
public bool|IResolvable EnforceProvidedLabels { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, forces the output to match the provided labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}

---

##### `PrecisionRecallTradeoff`<sup>Optional</sup> <a name="PrecisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.precisionRecallTradeoff"></a>

```csharp
public double PrecisionRecallTradeoff { get; set; }
```

- *Type:* double

The value for precision and recall tradeoff. A value of 0.5 means no preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#precision_recall_tradeoff GlueMlTransform#precision_recall_tradeoff}

---

##### `PrimaryKeyColumnName`<sup>Optional</sup> <a name="PrimaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.primaryKeyColumnName"></a>

```csharp
public string PrimaryKeyColumnName { get; set; }
```

- *Type:* string

The name of a column that uniquely identifies rows in the source table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueMlTransformInputRecordTablesGlueTablesList <a name="GlueMlTransformInputRecordTablesGlueTablesList" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformInputRecordTablesGlueTablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get"></a>

```csharp
private GlueMlTransformInputRecordTablesGlueTablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.internalValue"></a>

```csharp
public IResolvable|GlueMlTransformInputRecordTablesGlueTables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]

---


### GlueMlTransformInputRecordTablesGlueTablesOutputReference <a name="GlueMlTransformInputRecordTablesGlueTablesOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformInputRecordTablesGlueTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueMlTransformInputRecordTablesGlueTables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>

---


### GlueMlTransformInputRecordTablesOutputReference <a name="GlueMlTransformInputRecordTablesOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformInputRecordTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables">PutGlueTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetGlueTables">ResetGlueTables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlueTables` <a name="PutGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables"></a>

```csharp
private void PutGlueTables(IResolvable|GlueMlTransformInputRecordTablesGlueTables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]

---

##### `ResetGlueTables` <a name="ResetGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetGlueTables"></a>

```csharp
private void ResetGlueTables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTables">GlueTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList">GlueMlTransformInputRecordTablesGlueTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTablesInput">GlueTablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlueTables`<sup>Required</sup> <a name="GlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTables"></a>

```csharp
public GlueMlTransformInputRecordTablesGlueTablesList GlueTables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList">GlueMlTransformInputRecordTablesGlueTablesList</a>

---

##### `GlueTablesInput`<sup>Optional</sup> <a name="GlueTablesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTablesInput"></a>

```csharp
public IResolvable|GlueMlTransformInputRecordTablesGlueTables[] GlueTablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueMlTransformInputRecordTables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---


### GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference <a name="GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetMlUserDataEncryptionMode">ResetMlUserDataEncryptionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMlUserDataEncryptionMode` <a name="ResetMlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetMlUserDataEncryptionMode"></a>

```csharp
private void ResetMlUserDataEncryptionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionModeInput">MlUserDataEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode">MlUserDataEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MlUserDataEncryptionModeInput`<sup>Optional</sup> <a name="MlUserDataEncryptionModeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionModeInput"></a>

```csharp
public string MlUserDataEncryptionModeInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MlUserDataEncryptionMode`<sup>Required</sup> <a name="MlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode"></a>

```csharp
public string MlUserDataEncryptionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueMlTransformTransformEncryptionMlUserDataEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---


### GlueMlTransformTransformEncryptionOutputReference <a name="GlueMlTransformTransformEncryptionOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformTransformEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption">PutMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetMlUserDataEncryption">ResetMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetTaskRunSecurityConfigurationName">ResetTaskRunSecurityConfigurationName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMlUserDataEncryption` <a name="PutMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption"></a>

```csharp
private void PutMlUserDataEncryption(GlueMlTransformTransformEncryptionMlUserDataEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---

##### `ResetMlUserDataEncryption` <a name="ResetMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetMlUserDataEncryption"></a>

```csharp
private void ResetMlUserDataEncryption()
```

##### `ResetTaskRunSecurityConfigurationName` <a name="ResetTaskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetTaskRunSecurityConfigurationName"></a>

```csharp
private void ResetTaskRunSecurityConfigurationName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption">MlUserDataEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryptionInput">MlUserDataEncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationNameInput">TaskRunSecurityConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName">TaskRunSecurityConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MlUserDataEncryption`<sup>Required</sup> <a name="MlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption"></a>

```csharp
public GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference MlUserDataEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a>

---

##### `MlUserDataEncryptionInput`<sup>Optional</sup> <a name="MlUserDataEncryptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryptionInput"></a>

```csharp
public IResolvable|GlueMlTransformTransformEncryptionMlUserDataEncryption MlUserDataEncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---

##### `TaskRunSecurityConfigurationNameInput`<sup>Optional</sup> <a name="TaskRunSecurityConfigurationNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationNameInput"></a>

```csharp
public string TaskRunSecurityConfigurationNameInput { get; }
```

- *Type:* string

---

##### `TaskRunSecurityConfigurationName`<sup>Required</sup> <a name="TaskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName"></a>

```csharp
public string TaskRunSecurityConfigurationName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueMlTransformTransformEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---


### GlueMlTransformTransformParametersFindMatchesParametersOutputReference <a name="GlueMlTransformTransformParametersFindMatchesParametersOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformTransformParametersFindMatchesParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeoff">ResetAccuracyCostTradeoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels">ResetEnforceProvidedLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeoff">ResetPrecisionRecallTradeoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName">ResetPrimaryKeyColumnName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccuracyCostTradeoff` <a name="ResetAccuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeoff"></a>

```csharp
private void ResetAccuracyCostTradeoff()
```

##### `ResetEnforceProvidedLabels` <a name="ResetEnforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels"></a>

```csharp
private void ResetEnforceProvidedLabels()
```

##### `ResetPrecisionRecallTradeoff` <a name="ResetPrecisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeoff"></a>

```csharp
private void ResetPrecisionRecallTradeoff()
```

##### `ResetPrimaryKeyColumnName` <a name="ResetPrimaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName"></a>

```csharp
private void ResetPrimaryKeyColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoffInput">AccuracyCostTradeoffInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput">EnforceProvidedLabelsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoffInput">PrecisionRecallTradeoffInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput">PrimaryKeyColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff">AccuracyCostTradeoff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">EnforceProvidedLabels</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff">PrecisionRecallTradeoff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">PrimaryKeyColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccuracyCostTradeoffInput`<sup>Optional</sup> <a name="AccuracyCostTradeoffInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoffInput"></a>

```csharp
public double AccuracyCostTradeoffInput { get; }
```

- *Type:* double

---

##### `EnforceProvidedLabelsInput`<sup>Optional</sup> <a name="EnforceProvidedLabelsInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput"></a>

```csharp
public bool|IResolvable EnforceProvidedLabelsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrecisionRecallTradeoffInput`<sup>Optional</sup> <a name="PrecisionRecallTradeoffInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoffInput"></a>

```csharp
public double PrecisionRecallTradeoffInput { get; }
```

- *Type:* double

---

##### `PrimaryKeyColumnNameInput`<sup>Optional</sup> <a name="PrimaryKeyColumnNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput"></a>

```csharp
public string PrimaryKeyColumnNameInput { get; }
```

- *Type:* string

---

##### `AccuracyCostTradeoff`<sup>Required</sup> <a name="AccuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff"></a>

```csharp
public double AccuracyCostTradeoff { get; }
```

- *Type:* double

---

##### `EnforceProvidedLabels`<sup>Required</sup> <a name="EnforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```csharp
public bool|IResolvable EnforceProvidedLabels { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrecisionRecallTradeoff`<sup>Required</sup> <a name="PrecisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff"></a>

```csharp
public double PrecisionRecallTradeoff { get; }
```

- *Type:* double

---

##### `PrimaryKeyColumnName`<sup>Required</sup> <a name="PrimaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```csharp
public string PrimaryKeyColumnName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueMlTransformTransformParametersFindMatchesParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---


### GlueMlTransformTransformParametersOutputReference <a name="GlueMlTransformTransformParametersOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueMlTransformTransformParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters">PutFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resetFindMatchesParameters">ResetFindMatchesParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFindMatchesParameters` <a name="PutFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters"></a>

```csharp
private void PutFindMatchesParameters(GlueMlTransformTransformParametersFindMatchesParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---

##### `ResetFindMatchesParameters` <a name="ResetFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resetFindMatchesParameters"></a>

```csharp
private void ResetFindMatchesParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParameters">FindMatchesParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference">GlueMlTransformTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParametersInput">FindMatchesParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformTypeInput">TransformTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformType">TransformType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FindMatchesParameters`<sup>Required</sup> <a name="FindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParameters"></a>

```csharp
public GlueMlTransformTransformParametersFindMatchesParametersOutputReference FindMatchesParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference">GlueMlTransformTransformParametersFindMatchesParametersOutputReference</a>

---

##### `FindMatchesParametersInput`<sup>Optional</sup> <a name="FindMatchesParametersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParametersInput"></a>

```csharp
public IResolvable|GlueMlTransformTransformParametersFindMatchesParameters FindMatchesParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---

##### `TransformTypeInput`<sup>Optional</sup> <a name="TransformTypeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformTypeInput"></a>

```csharp
public string TransformTypeInput { get; }
```

- *Type:* string

---

##### `TransformType`<sup>Required</sup> <a name="TransformType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformType"></a>

```csharp
public string TransformType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueMlTransformTransformParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---



