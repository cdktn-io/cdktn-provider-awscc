# `lookoutequipmentInferenceScheduler` Submodule <a name="`lookoutequipmentInferenceScheduler` Submodule" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutequipmentInferenceScheduler <a name="LookoutequipmentInferenceScheduler" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceScheduler(Construct Scope, string Id, LookoutequipmentInferenceSchedulerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig">LookoutequipmentInferenceSchedulerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig">LookoutequipmentInferenceSchedulerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration">PutDataInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration">PutDataOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetDataDelayOffsetInMinutes">ResetDataDelayOffsetInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetInferenceSchedulerName">ResetInferenceSchedulerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetServerSideKmsKeyId">ResetServerSideKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataInputConfiguration` <a name="PutDataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration"></a>

```csharp
private void PutDataInputConfiguration(LookoutequipmentInferenceSchedulerDataInputConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---

##### `PutDataOutputConfiguration` <a name="PutDataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration"></a>

```csharp
private void PutDataOutputConfiguration(LookoutequipmentInferenceSchedulerDataOutputConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags"></a>

```csharp
private void PutTags(IResolvable|LookoutequipmentInferenceSchedulerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]

---

##### `ResetDataDelayOffsetInMinutes` <a name="ResetDataDelayOffsetInMinutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetDataDelayOffsetInMinutes"></a>

```csharp
private void ResetDataDelayOffsetInMinutes()
```

##### `ResetInferenceSchedulerName` <a name="ResetInferenceSchedulerName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetInferenceSchedulerName"></a>

```csharp
private void ResetInferenceSchedulerName()
```

##### `ResetServerSideKmsKeyId` <a name="ResetServerSideKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetServerSideKmsKeyId"></a>

```csharp
private void ResetServerSideKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LookoutequipmentInferenceScheduler.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LookoutequipmentInferenceScheduler.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LookoutequipmentInferenceScheduler.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LookoutequipmentInferenceScheduler.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LookoutequipmentInferenceScheduler to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LookoutequipmentInferenceScheduler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LookoutequipmentInferenceScheduler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfiguration">DataInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfiguration">DataOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerArn">InferenceSchedulerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList">LookoutequipmentInferenceSchedulerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutesInput">DataDelayOffsetInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfigurationInput">DataInputConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfigurationInput">DataOutputConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequencyInput">DataUploadFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerNameInput">InferenceSchedulerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyIdInput">ServerSideKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes">DataDelayOffsetInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequency">DataUploadFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerName">InferenceSchedulerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyId">ServerSideKmsKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataInputConfiguration`<sup>Required</sup> <a name="DataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfiguration"></a>

```csharp
public LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference DataInputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a>

---

##### `DataOutputConfiguration`<sup>Required</sup> <a name="DataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfiguration"></a>

```csharp
public LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference DataOutputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InferenceSchedulerArn`<sup>Required</sup> <a name="InferenceSchedulerArn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerArn"></a>

```csharp
public string InferenceSchedulerArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tags"></a>

```csharp
public LookoutequipmentInferenceSchedulerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList">LookoutequipmentInferenceSchedulerTagsList</a>

---

##### `DataDelayOffsetInMinutesInput`<sup>Optional</sup> <a name="DataDelayOffsetInMinutesInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutesInput"></a>

```csharp
public double DataDelayOffsetInMinutesInput { get; }
```

- *Type:* double

---

##### `DataInputConfigurationInput`<sup>Optional</sup> <a name="DataInputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfigurationInput"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfiguration DataInputConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---

##### `DataOutputConfigurationInput`<sup>Optional</sup> <a name="DataOutputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfigurationInput"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerDataOutputConfiguration DataOutputConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---

##### `DataUploadFrequencyInput`<sup>Optional</sup> <a name="DataUploadFrequencyInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequencyInput"></a>

```csharp
public string DataUploadFrequencyInput { get; }
```

- *Type:* string

---

##### `InferenceSchedulerNameInput`<sup>Optional</sup> <a name="InferenceSchedulerNameInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerNameInput"></a>

```csharp
public string InferenceSchedulerNameInput { get; }
```

- *Type:* string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ServerSideKmsKeyIdInput`<sup>Optional</sup> <a name="ServerSideKmsKeyIdInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyIdInput"></a>

```csharp
public string ServerSideKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tagsInput"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]

---

##### `DataDelayOffsetInMinutes`<sup>Required</sup> <a name="DataDelayOffsetInMinutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes"></a>

```csharp
public double DataDelayOffsetInMinutes { get; }
```

- *Type:* double

---

##### `DataUploadFrequency`<sup>Required</sup> <a name="DataUploadFrequency" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequency"></a>

```csharp
public string DataUploadFrequency { get; }
```

- *Type:* string

---

##### `InferenceSchedulerName`<sup>Required</sup> <a name="InferenceSchedulerName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerName"></a>

```csharp
public string InferenceSchedulerName { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `ServerSideKmsKeyId`<sup>Required</sup> <a name="ServerSideKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyId"></a>

```csharp
public string ServerSideKmsKeyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutequipmentInferenceSchedulerConfig <a name="LookoutequipmentInferenceSchedulerConfig" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    LookoutequipmentInferenceSchedulerDataInputConfiguration DataInputConfiguration,
    LookoutequipmentInferenceSchedulerDataOutputConfiguration DataOutputConfiguration,
    string DataUploadFrequency,
    string ModelName,
    string RoleArn,
    double DataDelayOffsetInMinutes = null,
    string InferenceSchedulerName = null,
    string ServerSideKmsKeyId = null,
    IResolvable|LookoutequipmentInferenceSchedulerTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataInputConfiguration">DataInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataOutputConfiguration">DataOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataUploadFrequency">DataUploadFrequency</a></code> | <code>string</code> | How often data is uploaded to the source S3 bucket for the input data. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.modelName">ModelName</a></code> | <code>string</code> | The name of the previously trained ML model being used to create the inference scheduler. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataDelayOffsetInMinutes">DataDelayOffsetInMinutes</a></code> | <code>double</code> | A period of time (in minutes) by which inference on the data is delayed after the data starts. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.inferenceSchedulerName">InferenceSchedulerName</a></code> | <code>string</code> | The name of the inference scheduler being created. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.serverSideKmsKeyId">ServerSideKmsKeyId</a></code> | <code>string</code> | Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]</code> | Any tags associated with the inference scheduler. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataInputConfiguration`<sup>Required</sup> <a name="DataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataInputConfiguration"></a>

```csharp
public LookoutequipmentInferenceSchedulerDataInputConfiguration DataInputConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_input_configuration LookoutequipmentInferenceScheduler#data_input_configuration}

---

##### `DataOutputConfiguration`<sup>Required</sup> <a name="DataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataOutputConfiguration"></a>

```csharp
public LookoutequipmentInferenceSchedulerDataOutputConfiguration DataOutputConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_output_configuration LookoutequipmentInferenceScheduler#data_output_configuration}

---

##### `DataUploadFrequency`<sup>Required</sup> <a name="DataUploadFrequency" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataUploadFrequency"></a>

```csharp
public string DataUploadFrequency { get; set; }
```

- *Type:* string

How often data is uploaded to the source S3 bucket for the input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_upload_frequency LookoutequipmentInferenceScheduler#data_upload_frequency}

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

The name of the previously trained ML model being used to create the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#model_name LookoutequipmentInferenceScheduler#model_name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#role_arn LookoutequipmentInferenceScheduler#role_arn}

---

##### `DataDelayOffsetInMinutes`<sup>Optional</sup> <a name="DataDelayOffsetInMinutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataDelayOffsetInMinutes"></a>

```csharp
public double DataDelayOffsetInMinutes { get; set; }
```

- *Type:* double

A period of time (in minutes) by which inference on the data is delayed after the data starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_delay_offset_in_minutes LookoutequipmentInferenceScheduler#data_delay_offset_in_minutes}

---

##### `InferenceSchedulerName`<sup>Optional</sup> <a name="InferenceSchedulerName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.inferenceSchedulerName"></a>

```csharp
public string InferenceSchedulerName { get; set; }
```

- *Type:* string

The name of the inference scheduler being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#inference_scheduler_name LookoutequipmentInferenceScheduler#inference_scheduler_name}

---

##### `ServerSideKmsKeyId`<sup>Optional</sup> <a name="ServerSideKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.serverSideKmsKeyId"></a>

```csharp
public string ServerSideKmsKeyId { get; set; }
```

- *Type:* string

Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#server_side_kms_key_id LookoutequipmentInferenceScheduler#server_side_kms_key_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.tags"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]

Any tags associated with the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#tags LookoutequipmentInferenceScheduler#tags}

---

### LookoutequipmentInferenceSchedulerDataInputConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerDataInputConfiguration {
    LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration S3InputConfiguration,
    LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration InferenceInputNameConfiguration = null,
    string InputTimeZoneOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.s3InputConfiguration">S3InputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | Specifies configuration information for the input data for the inference, including input data S3 location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inferenceInputNameConfiguration">InferenceInputNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | Specifies configuration information for the input data for the inference, including timestamp format and delimiter. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inputTimeZoneOffset">InputTimeZoneOffset</a></code> | <code>string</code> | Indicates the difference between your time zone and Greenwich Mean Time (GMT). |

---

##### `S3InputConfiguration`<sup>Required</sup> <a name="S3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.s3InputConfiguration"></a>

```csharp
public LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration S3InputConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

Specifies configuration information for the input data for the inference, including input data S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#s3_input_configuration LookoutequipmentInferenceScheduler#s3_input_configuration}

---

##### `InferenceInputNameConfiguration`<sup>Optional</sup> <a name="InferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inferenceInputNameConfiguration"></a>

```csharp
public LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration InferenceInputNameConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

Specifies configuration information for the input data for the inference, including timestamp format and delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#inference_input_name_configuration LookoutequipmentInferenceScheduler#inference_input_name_configuration}

---

##### `InputTimeZoneOffset`<sup>Optional</sup> <a name="InputTimeZoneOffset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inputTimeZoneOffset"></a>

```csharp
public string InputTimeZoneOffset { get; set; }
```

- *Type:* string

Indicates the difference between your time zone and Greenwich Mean Time (GMT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#input_time_zone_offset LookoutequipmentInferenceScheduler#input_time_zone_offset}

---

### LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration {
    string ComponentTimestampDelimiter = null,
    string TimestampFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.componentTimestampDelimiter">ComponentTimestampDelimiter</a></code> | <code>string</code> | Indicates the delimiter character used between items in the data. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-). |

---

##### `ComponentTimestampDelimiter`<sup>Optional</sup> <a name="ComponentTimestampDelimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.componentTimestampDelimiter"></a>

```csharp
public string ComponentTimestampDelimiter { get; set; }
```

- *Type:* string

Indicates the delimiter character used between items in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#component_timestamp_delimiter LookoutequipmentInferenceScheduler#component_timestamp_delimiter}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; set; }
```

- *Type:* string

The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#timestamp_format LookoutequipmentInferenceScheduler#timestamp_format}

---

### LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration {
    string Bucket,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}.

---

### LookoutequipmentInferenceSchedulerDataOutputConfiguration <a name="LookoutequipmentInferenceSchedulerDataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerDataOutputConfiguration {
    LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration S3OutputConfiguration,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.s3OutputConfiguration">S3OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | Specifies configuration information for the output results from the inference, including output S3 location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The ID number for the AWS KMS key used to encrypt the inference output. |

---

##### `S3OutputConfiguration`<sup>Required</sup> <a name="S3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.s3OutputConfiguration"></a>

```csharp
public LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration S3OutputConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

Specifies configuration information for the output results from the inference, including output S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#s3_output_configuration LookoutequipmentInferenceScheduler#s3_output_configuration}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The ID number for the AWS KMS key used to encrypt the inference output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#kms_key_id LookoutequipmentInferenceScheduler#kms_key_id}

---

### LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration {
    string Bucket,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}.

---

### LookoutequipmentInferenceSchedulerTags <a name="LookoutequipmentInferenceSchedulerTags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.key">Key</a></code> | <code>string</code> | The key for the specified tag. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.value">Value</a></code> | <code>string</code> | The value for the specified tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key for the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#key LookoutequipmentInferenceScheduler#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#value LookoutequipmentInferenceScheduler#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetComponentTimestampDelimiter">ResetComponentTimestampDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComponentTimestampDelimiter` <a name="ResetComponentTimestampDelimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetComponentTimestampDelimiter"></a>

```csharp
private void ResetComponentTimestampDelimiter()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetTimestampFormat"></a>

```csharp
private void ResetTimestampFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiterInput">ComponentTimestampDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter">ComponentTimestampDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentTimestampDelimiterInput`<sup>Optional</sup> <a name="ComponentTimestampDelimiterInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiterInput"></a>

```csharp
public string ComponentTimestampDelimiterInput { get; }
```

- *Type:* string

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormatInput"></a>

```csharp
public string TimestampFormatInput { get; }
```

- *Type:* string

---

##### `ComponentTimestampDelimiter`<sup>Required</sup> <a name="ComponentTimestampDelimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter"></a>

```csharp
public string ComponentTimestampDelimiter { get; }
```

- *Type:* string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration">PutInferenceInputNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration">PutS3InputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInferenceInputNameConfiguration">ResetInferenceInputNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInputTimeZoneOffset">ResetInputTimeZoneOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInferenceInputNameConfiguration` <a name="PutInferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration"></a>

```csharp
private void PutInferenceInputNameConfiguration(LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---

##### `PutS3InputConfiguration` <a name="PutS3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration"></a>

```csharp
private void PutS3InputConfiguration(LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---

##### `ResetInferenceInputNameConfiguration` <a name="ResetInferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInferenceInputNameConfiguration"></a>

```csharp
private void ResetInferenceInputNameConfiguration()
```

##### `ResetInputTimeZoneOffset` <a name="ResetInputTimeZoneOffset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInputTimeZoneOffset"></a>

```csharp
private void ResetInputTimeZoneOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration">InferenceInputNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration">S3InputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfigurationInput">InferenceInputNameConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffsetInput">InputTimeZoneOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfigurationInput">S3InputConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset">InputTimeZoneOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InferenceInputNameConfiguration`<sup>Required</sup> <a name="InferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration"></a>

```csharp
public LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference InferenceInputNameConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a>

---

##### `S3InputConfiguration`<sup>Required</sup> <a name="S3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration"></a>

```csharp
public LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference S3InputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a>

---

##### `InferenceInputNameConfigurationInput`<sup>Optional</sup> <a name="InferenceInputNameConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfigurationInput"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration InferenceInputNameConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---

##### `InputTimeZoneOffsetInput`<sup>Optional</sup> <a name="InputTimeZoneOffsetInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffsetInput"></a>

```csharp
public string InputTimeZoneOffsetInput { get; }
```

- *Type:* string

---

##### `S3InputConfigurationInput`<sup>Optional</sup> <a name="S3InputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfigurationInput"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration S3InputConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---

##### `InputTimeZoneOffset`<sup>Required</sup> <a name="InputTimeZoneOffset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset"></a>

```csharp
public string InputTimeZoneOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration">PutS3OutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3OutputConfiguration` <a name="PutS3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration"></a>

```csharp
private void PutS3OutputConfiguration(LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration">S3OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfigurationInput">S3OutputConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3OutputConfiguration`<sup>Required</sup> <a name="S3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration"></a>

```csharp
public LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference S3OutputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `S3OutputConfigurationInput`<sup>Optional</sup> <a name="S3OutputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfigurationInput"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration S3OutputConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerDataOutputConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerTagsList <a name="LookoutequipmentInferenceSchedulerTagsList" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get"></a>

```csharp
private LookoutequipmentInferenceSchedulerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.internalValue"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>[]

---


### LookoutequipmentInferenceSchedulerTagsOutputReference <a name="LookoutequipmentInferenceSchedulerTagsOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutequipmentInferenceSchedulerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LookoutequipmentInferenceSchedulerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>

---



