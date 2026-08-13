# `batchComputeEnvironment` Submodule <a name="`batchComputeEnvironment` Submodule" id="@cdktn/provider-awscc.batchComputeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchComputeEnvironment <a name="BatchComputeEnvironment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment awscc_batch_compute_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironment(Construct Scope, string Id, BatchComputeEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig">BatchComputeEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig">BatchComputeEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources">PutComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration">PutEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeEnvironmentName">ResetComputeEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeResources">ResetComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetEksConfiguration">ResetEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetReplaceComputeEnvironment">ResetReplaceComputeEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetServiceRole">ResetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUnmanagedvCpus">ResetUnmanagedvCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeResources` <a name="PutComputeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources"></a>

```csharp
private void PutComputeResources(BatchComputeEnvironmentComputeResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---

##### `PutEksConfiguration` <a name="PutEksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration"></a>

```csharp
private void PutEksConfiguration(BatchComputeEnvironmentEksConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy"></a>

```csharp
private void PutUpdatePolicy(BatchComputeEnvironmentUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---

##### `ResetComputeEnvironmentName` <a name="ResetComputeEnvironmentName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeEnvironmentName"></a>

```csharp
private void ResetComputeEnvironmentName()
```

##### `ResetComputeResources` <a name="ResetComputeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeResources"></a>

```csharp
private void ResetComputeResources()
```

##### `ResetContext` <a name="ResetContext" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetEksConfiguration` <a name="ResetEksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetEksConfiguration"></a>

```csharp
private void ResetEksConfiguration()
```

##### `ResetReplaceComputeEnvironment` <a name="ResetReplaceComputeEnvironment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetReplaceComputeEnvironment"></a>

```csharp
private void ResetReplaceComputeEnvironment()
```

##### `ResetServiceRole` <a name="ResetServiceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetServiceRole"></a>

```csharp
private void ResetServiceRole()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUnmanagedvCpus` <a name="ResetUnmanagedvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUnmanagedvCpus"></a>

```csharp
private void ResetUnmanagedvCpus()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUpdatePolicy"></a>

```csharp
private void ResetUpdatePolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BatchComputeEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BatchComputeEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BatchComputeEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BatchComputeEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BatchComputeEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BatchComputeEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BatchComputeEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BatchComputeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BatchComputeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentArn">ComputeEnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResources">ComputeResources</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference">BatchComputeEnvironmentComputeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfiguration">EksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference">BatchComputeEnvironmentEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference">BatchComputeEnvironmentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentNameInput">ComputeEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResourcesInput">ComputeResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfigurationInput">EksConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironmentInput">ReplaceComputeEnvironmentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpusInput">UnmanagedvCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentName">ComputeEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironment">ReplaceComputeEnvironment</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRole">ServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpus">UnmanagedvCpus</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ComputeEnvironmentArn`<sup>Required</sup> <a name="ComputeEnvironmentArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentArn"></a>

```csharp
public string ComputeEnvironmentArn { get; }
```

- *Type:* string

---

##### `ComputeResources`<sup>Required</sup> <a name="ComputeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResources"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesOutputReference ComputeResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference">BatchComputeEnvironmentComputeResourcesOutputReference</a>

---

##### `EksConfiguration`<sup>Required</sup> <a name="EksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfiguration"></a>

```csharp
public BatchComputeEnvironmentEksConfigurationOutputReference EksConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference">BatchComputeEnvironmentEksConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicy"></a>

```csharp
public BatchComputeEnvironmentUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference">BatchComputeEnvironmentUpdatePolicyOutputReference</a>

---

##### `ComputeEnvironmentNameInput`<sup>Optional</sup> <a name="ComputeEnvironmentNameInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentNameInput"></a>

```csharp
public string ComputeEnvironmentNameInput { get; }
```

- *Type:* string

---

##### `ComputeResourcesInput`<sup>Optional</sup> <a name="ComputeResourcesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResourcesInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResources ComputeResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `EksConfigurationInput`<sup>Optional</sup> <a name="EksConfigurationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfigurationInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentEksConfiguration EksConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---

##### `ReplaceComputeEnvironmentInput`<sup>Optional</sup> <a name="ReplaceComputeEnvironmentInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironmentInput"></a>

```csharp
public bool|IResolvable ReplaceComputeEnvironmentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRoleInput"></a>

```csharp
public string ServiceRoleInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnmanagedvCpusInput`<sup>Optional</sup> <a name="UnmanagedvCpusInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpusInput"></a>

```csharp
public double UnmanagedvCpusInput { get; }
```

- *Type:* double

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicyInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentUpdatePolicy UpdatePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---

##### `ComputeEnvironmentName`<sup>Required</sup> <a name="ComputeEnvironmentName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentName"></a>

```csharp
public string ComputeEnvironmentName { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `ReplaceComputeEnvironment`<sup>Required</sup> <a name="ReplaceComputeEnvironment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironment"></a>

```csharp
public bool|IResolvable ReplaceComputeEnvironment { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRole"></a>

```csharp
public string ServiceRole { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UnmanagedvCpus`<sup>Required</sup> <a name="UnmanagedvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpus"></a>

```csharp
public double UnmanagedvCpus { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchComputeEnvironmentComputeResources <a name="BatchComputeEnvironmentComputeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResources {
    string AllocationStrategy = null,
    double BidPercentage = null,
    System.Collections.Generic.IDictionary<string, string> CapacityTags = null,
    double DesiredvCpus = null,
    IResolvable|BatchComputeEnvironmentComputeResourcesEc2Configuration[] Ec2Configuration = null,
    string Ec2KeyPair = null,
    string ImageId = null,
    string InstanceRole = null,
    string[] InstanceTypes = null,
    BatchComputeEnvironmentComputeResourcesLaunchTemplate LaunchTemplate = null,
    BatchComputeEnvironmentComputeResourcesManagedInstancesProvider ManagedInstancesProvider = null,
    double MaxvCpus = null,
    double MinvCpus = null,
    string PlacementGroup = null,
    BatchComputeEnvironmentComputeResourcesScalingPolicy ScalingPolicy = null,
    string[] SecurityGroupIds = null,
    string SpotIamFleetRole = null,
    string[] Subnets = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string Type = null,
    bool|IResolvable UpdateToLatestImageVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.bidPercentage">BidPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.capacityTags">CapacityTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Capacity-level tags for compute environments. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.desiredvCpus">DesiredvCpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#desiredv_cpus BatchComputeEnvironment#desiredv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2Configuration">Ec2Configuration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#ec_2_configuration BatchComputeEnvironment#ec_2_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#ec_2_key_pair BatchComputeEnvironment#ec_2_key_pair}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceRole">InstanceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#instance_types BatchComputeEnvironment#instance_types}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.managedInstancesProvider">ManagedInstancesProvider</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#managed_instances_provider BatchComputeEnvironment#managed_instances_provider}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.maxvCpus">MaxvCpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#maxv_cpus BatchComputeEnvironment#maxv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.minvCpus">MinvCpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#minv_cpus BatchComputeEnvironment#minv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.placementGroup">PlacementGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.scalingPolicy">ScalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#scaling_policy BatchComputeEnvironment#scaling_policy}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.spotIamFleetRole">SpotIamFleetRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.updateToLatestImageVersion">UpdateToLatestImageVersion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#update_to_latest_image_version BatchComputeEnvironment#update_to_latest_image_version}. |

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}.

---

##### `BidPercentage`<sup>Optional</sup> <a name="BidPercentage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.bidPercentage"></a>

```csharp
public double BidPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}.

---

##### `CapacityTags`<sup>Optional</sup> <a name="CapacityTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.capacityTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CapacityTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Capacity-level tags for compute environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#capacity_tags BatchComputeEnvironment#capacity_tags}

---

##### `DesiredvCpus`<sup>Optional</sup> <a name="DesiredvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.desiredvCpus"></a>

```csharp
public double DesiredvCpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#desiredv_cpus BatchComputeEnvironment#desiredv_cpus}.

---

##### `Ec2Configuration`<sup>Optional</sup> <a name="Ec2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2Configuration"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesEc2Configuration[] Ec2Configuration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#ec_2_configuration BatchComputeEnvironment#ec_2_configuration}.

---

##### `Ec2KeyPair`<sup>Optional</sup> <a name="Ec2KeyPair" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2KeyPair"></a>

```csharp
public string Ec2KeyPair { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#ec_2_key_pair BatchComputeEnvironment#ec_2_key_pair}.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}.

---

##### `InstanceRole`<sup>Optional</sup> <a name="InstanceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceRole"></a>

```csharp
public string InstanceRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}.

---

##### `InstanceTypes`<sup>Optional</sup> <a name="InstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#instance_types BatchComputeEnvironment#instance_types}.

---

##### `LaunchTemplate`<sup>Optional</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.launchTemplate"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesLaunchTemplate LaunchTemplate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}.

---

##### `ManagedInstancesProvider`<sup>Optional</sup> <a name="ManagedInstancesProvider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.managedInstancesProvider"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProvider ManagedInstancesProvider { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#managed_instances_provider BatchComputeEnvironment#managed_instances_provider}.

---

##### `MaxvCpus`<sup>Optional</sup> <a name="MaxvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.maxvCpus"></a>

```csharp
public double MaxvCpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#maxv_cpus BatchComputeEnvironment#maxv_cpus}.

---

##### `MinvCpus`<sup>Optional</sup> <a name="MinvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.minvCpus"></a>

```csharp
public double MinvCpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#minv_cpus BatchComputeEnvironment#minv_cpus}.

---

##### `PlacementGroup`<sup>Optional</sup> <a name="PlacementGroup" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.placementGroup"></a>

```csharp
public string PlacementGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}.

---

##### `ScalingPolicy`<sup>Optional</sup> <a name="ScalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.scalingPolicy"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesScalingPolicy ScalingPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#scaling_policy BatchComputeEnvironment#scaling_policy}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}.

---

##### `SpotIamFleetRole`<sup>Optional</sup> <a name="SpotIamFleetRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.spotIamFleetRole"></a>

```csharp
public string SpotIamFleetRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `UpdateToLatestImageVersion`<sup>Optional</sup> <a name="UpdateToLatestImageVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.updateToLatestImageVersion"></a>

```csharp
public bool|IResolvable UpdateToLatestImageVersion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#update_to_latest_image_version BatchComputeEnvironment#update_to_latest_image_version}.

---

### BatchComputeEnvironmentComputeResourcesEc2Configuration <a name="BatchComputeEnvironmentComputeResourcesEc2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesEc2Configuration {
    string BatchImageStatus = null,
    string ImageIdOverride = null,
    string ImageKubernetesVersion = null,
    string ImageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.batchImageStatus">BatchImageStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#batch_image_status BatchComputeEnvironment#batch_image_status}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageIdOverride">ImageIdOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageKubernetesVersion">ImageKubernetesVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#image_kubernetes_version BatchComputeEnvironment#image_kubernetes_version}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageType">ImageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}. |

---

##### `BatchImageStatus`<sup>Optional</sup> <a name="BatchImageStatus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.batchImageStatus"></a>

```csharp
public string BatchImageStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#batch_image_status BatchComputeEnvironment#batch_image_status}.

---

##### `ImageIdOverride`<sup>Optional</sup> <a name="ImageIdOverride" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageIdOverride"></a>

```csharp
public string ImageIdOverride { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}.

---

##### `ImageKubernetesVersion`<sup>Optional</sup> <a name="ImageKubernetesVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageKubernetesVersion"></a>

```csharp
public string ImageKubernetesVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#image_kubernetes_version BatchComputeEnvironment#image_kubernetes_version}.

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageType"></a>

```csharp
public string ImageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}.

---

### BatchComputeEnvironmentComputeResourcesLaunchTemplate <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesLaunchTemplate {
    string LaunchTemplateId = null,
    string LaunchTemplateName = null,
    IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides[] Overrides = null,
    string UserdataType = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.overrides">Overrides</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#overrides BatchComputeEnvironment#overrides}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.userdataType">UserdataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}. |

---

##### `LaunchTemplateId`<sup>Optional</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}.

---

##### `LaunchTemplateName`<sup>Optional</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}.

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.overrides"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides[] Overrides { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#overrides BatchComputeEnvironment#overrides}.

---

##### `UserdataType`<sup>Optional</sup> <a name="UserdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.userdataType"></a>

```csharp
public string UserdataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}.

---

### BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides {
    string LaunchTemplateId = null,
    string LaunchTemplateName = null,
    string[] TargetInstanceTypes = null,
    string UserdataType = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.targetInstanceTypes">TargetInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#target_instance_types BatchComputeEnvironment#target_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.userdataType">UserdataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}. |

---

##### `LaunchTemplateId`<sup>Optional</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}.

---

##### `LaunchTemplateName`<sup>Optional</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}.

---

##### `TargetInstanceTypes`<sup>Optional</sup> <a name="TargetInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.targetInstanceTypes"></a>

```csharp
public string[] TargetInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#target_instance_types BatchComputeEnvironment#target_instance_types}.

---

##### `UserdataType`<sup>Optional</sup> <a name="UserdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.userdataType"></a>

```csharp
public string UserdataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProvider <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProvider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProvider {
    BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization InfrastructureOptimization = null,
    string InfrastructureRoleArn = null,
    BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate InstanceLaunchTemplate = null,
    string PropagateTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.infrastructureOptimization">InfrastructureOptimization</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#infrastructure_optimization BatchComputeEnvironment#infrastructure_optimization}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#infrastructure_role_arn BatchComputeEnvironment#infrastructure_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.instanceLaunchTemplate">InstanceLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#instance_launch_template BatchComputeEnvironment#instance_launch_template}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.propagateTags">PropagateTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#propagate_tags BatchComputeEnvironment#propagate_tags}. |

---

##### `InfrastructureOptimization`<sup>Optional</sup> <a name="InfrastructureOptimization" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.infrastructureOptimization"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization InfrastructureOptimization { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#infrastructure_optimization BatchComputeEnvironment#infrastructure_optimization}.

---

##### `InfrastructureRoleArn`<sup>Optional</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.infrastructureRoleArn"></a>

```csharp
public string InfrastructureRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#infrastructure_role_arn BatchComputeEnvironment#infrastructure_role_arn}.

---

##### `InstanceLaunchTemplate`<sup>Optional</sup> <a name="InstanceLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.instanceLaunchTemplate"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate InstanceLaunchTemplate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#instance_launch_template BatchComputeEnvironment#instance_launch_template}.

---

##### `PropagateTags`<sup>Optional</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.propagateTags"></a>

```csharp
public string PropagateTags { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#propagate_tags BatchComputeEnvironment#propagate_tags}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization {
    double ScaleInAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization.property.scaleInAfter">ScaleInAfter</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#scale_in_after BatchComputeEnvironment#scale_in_after}. |

---

##### `ScaleInAfter`<sup>Optional</sup> <a name="ScaleInAfter" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization.property.scaleInAfter"></a>

```csharp
public double ScaleInAfter { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#scale_in_after BatchComputeEnvironment#scale_in_after}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate {
    string CapacityOptionType = null,
    BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations CapacityReservations = null,
    string Ec2InstanceProfileArn = null,
    bool|IResolvable FipsEnabled = null,
    bool|IResolvable InstanceMetadataTagsPropagation = null,
    BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements InstanceRequirements = null,
    BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration LocalStorageConfiguration = null,
    string Monitoring = null,
    BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration NetworkConfiguration = null,
    BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration StorageConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.capacityOptionType">CapacityOptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#capacity_option_type BatchComputeEnvironment#capacity_option_type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.capacityReservations">CapacityReservations</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#capacity_reservations BatchComputeEnvironment#capacity_reservations}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.ec2InstanceProfileArn">Ec2InstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#ec_2_instance_profile_arn BatchComputeEnvironment#ec_2_instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.fipsEnabled">FipsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#fips_enabled BatchComputeEnvironment#fips_enabled}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.instanceMetadataTagsPropagation">InstanceMetadataTagsPropagation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#instance_metadata_tags_propagation BatchComputeEnvironment#instance_metadata_tags_propagation}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#instance_requirements BatchComputeEnvironment#instance_requirements}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.localStorageConfiguration">LocalStorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#local_storage_configuration BatchComputeEnvironment#local_storage_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.monitoring">Monitoring</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#monitoring BatchComputeEnvironment#monitoring}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#network_configuration BatchComputeEnvironment#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.storageConfiguration">StorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#storage_configuration BatchComputeEnvironment#storage_configuration}. |

---

##### `CapacityOptionType`<sup>Optional</sup> <a name="CapacityOptionType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.capacityOptionType"></a>

```csharp
public string CapacityOptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#capacity_option_type BatchComputeEnvironment#capacity_option_type}.

---

##### `CapacityReservations`<sup>Optional</sup> <a name="CapacityReservations" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.capacityReservations"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations CapacityReservations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#capacity_reservations BatchComputeEnvironment#capacity_reservations}.

---

##### `Ec2InstanceProfileArn`<sup>Optional</sup> <a name="Ec2InstanceProfileArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.ec2InstanceProfileArn"></a>

```csharp
public string Ec2InstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#ec_2_instance_profile_arn BatchComputeEnvironment#ec_2_instance_profile_arn}.

---

##### `FipsEnabled`<sup>Optional</sup> <a name="FipsEnabled" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.fipsEnabled"></a>

```csharp
public bool|IResolvable FipsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#fips_enabled BatchComputeEnvironment#fips_enabled}.

---

##### `InstanceMetadataTagsPropagation`<sup>Optional</sup> <a name="InstanceMetadataTagsPropagation" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.instanceMetadataTagsPropagation"></a>

```csharp
public bool|IResolvable InstanceMetadataTagsPropagation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#instance_metadata_tags_propagation BatchComputeEnvironment#instance_metadata_tags_propagation}.

---

##### `InstanceRequirements`<sup>Optional</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.instanceRequirements"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements InstanceRequirements { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#instance_requirements BatchComputeEnvironment#instance_requirements}.

---

##### `LocalStorageConfiguration`<sup>Optional</sup> <a name="LocalStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.localStorageConfiguration"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration LocalStorageConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#local_storage_configuration BatchComputeEnvironment#local_storage_configuration}.

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.monitoring"></a>

```csharp
public string Monitoring { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#monitoring BatchComputeEnvironment#monitoring}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.networkConfiguration"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#network_configuration BatchComputeEnvironment#network_configuration}.

---

##### `StorageConfiguration`<sup>Optional</sup> <a name="StorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.storageConfiguration"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration StorageConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#storage_configuration BatchComputeEnvironment#storage_configuration}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations {
    string ReservationGroupArn = null,
    string ReservationPreference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.property.reservationGroupArn">ReservationGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#reservation_group_arn BatchComputeEnvironment#reservation_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.property.reservationPreference">ReservationPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#reservation_preference BatchComputeEnvironment#reservation_preference}. |

---

##### `ReservationGroupArn`<sup>Optional</sup> <a name="ReservationGroupArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.property.reservationGroupArn"></a>

```csharp
public string ReservationGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#reservation_group_arn BatchComputeEnvironment#reservation_group_arn}.

---

##### `ReservationPreference`<sup>Optional</sup> <a name="ReservationPreference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.property.reservationPreference"></a>

```csharp
public string ReservationPreference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#reservation_preference BatchComputeEnvironment#reservation_preference}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements {
    string[] AllowedInstanceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#allowed_instance_types BatchComputeEnvironment#allowed_instance_types}. |

---

##### `AllowedInstanceTypes`<sup>Optional</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#allowed_instance_types BatchComputeEnvironment#allowed_instance_types}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration {
    bool|IResolvable UseLocalStorage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration.property.useLocalStorage">UseLocalStorage</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#use_local_storage BatchComputeEnvironment#use_local_storage}. |

---

##### `UseLocalStorage`<sup>Optional</sup> <a name="UseLocalStorage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration.property.useLocalStorage"></a>

```csharp
public bool|IResolvable UseLocalStorage { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#use_local_storage BatchComputeEnvironment#use_local_storage}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration {
    string[] SecurityGroups = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#security_groups BatchComputeEnvironment#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}. |

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#security_groups BatchComputeEnvironment#security_groups}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration {
    double StorageSizeGiB = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration.property.storageSizeGiB">StorageSizeGiB</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#storage_size_gi_b BatchComputeEnvironment#storage_size_gi_b}. |

---

##### `StorageSizeGiB`<sup>Optional</sup> <a name="StorageSizeGiB" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration.property.storageSizeGiB"></a>

```csharp
public double StorageSizeGiB { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#storage_size_gi_b BatchComputeEnvironment#storage_size_gi_b}.

---

### BatchComputeEnvironmentComputeResourcesScalingPolicy <a name="BatchComputeEnvironmentComputeResourcesScalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesScalingPolicy {
    double MinScaleDownDelayMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy.property.minScaleDownDelayMinutes">MinScaleDownDelayMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#min_scale_down_delay_minutes BatchComputeEnvironment#min_scale_down_delay_minutes}. |

---

##### `MinScaleDownDelayMinutes`<sup>Optional</sup> <a name="MinScaleDownDelayMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy.property.minScaleDownDelayMinutes"></a>

```csharp
public double MinScaleDownDelayMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#min_scale_down_delay_minutes BatchComputeEnvironment#min_scale_down_delay_minutes}.

---

### BatchComputeEnvironmentConfig <a name="BatchComputeEnvironmentConfig" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Type,
    string ComputeEnvironmentName = null,
    BatchComputeEnvironmentComputeResources ComputeResources = null,
    string Context = null,
    BatchComputeEnvironmentEksConfiguration EksConfiguration = null,
    bool|IResolvable ReplaceComputeEnvironment = null,
    string ServiceRole = null,
    string State = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double UnmanagedvCpus = null,
    BatchComputeEnvironmentUpdatePolicy UpdatePolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeEnvironmentName">ComputeEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeResources">ComputeResources</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.context">Context</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.eksConfiguration">EksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.replaceComputeEnvironment">ReplaceComputeEnvironment</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.serviceRole">ServiceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.unmanagedvCpus">UnmanagedvCpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `ComputeEnvironmentName`<sup>Optional</sup> <a name="ComputeEnvironmentName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeEnvironmentName"></a>

```csharp
public string ComputeEnvironmentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}.

---

##### `ComputeResources`<sup>Optional</sup> <a name="ComputeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeResources"></a>

```csharp
public BatchComputeEnvironmentComputeResources ComputeResources { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}.

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}.

---

##### `EksConfiguration`<sup>Optional</sup> <a name="EksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.eksConfiguration"></a>

```csharp
public BatchComputeEnvironmentEksConfiguration EksConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}.

---

##### `ReplaceComputeEnvironment`<sup>Optional</sup> <a name="ReplaceComputeEnvironment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.replaceComputeEnvironment"></a>

```csharp
public bool|IResolvable ReplaceComputeEnvironment { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}.

---

##### `ServiceRole`<sup>Optional</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.serviceRole"></a>

```csharp
public string ServiceRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}

---

##### `UnmanagedvCpus`<sup>Optional</sup> <a name="UnmanagedvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.unmanagedvCpus"></a>

```csharp
public double UnmanagedvCpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}.

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.updatePolicy"></a>

```csharp
public BatchComputeEnvironmentUpdatePolicy UpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}.

---

### BatchComputeEnvironmentEksConfiguration <a name="BatchComputeEnvironmentEksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentEksConfiguration {
    string EksClusterArn = null,
    string KubernetesNamespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.eksClusterArn">EksClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}. |

---

##### `EksClusterArn`<sup>Optional</sup> <a name="EksClusterArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.eksClusterArn"></a>

```csharp
public string EksClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}.

---

##### `KubernetesNamespace`<sup>Optional</sup> <a name="KubernetesNamespace" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}.

---

### BatchComputeEnvironmentUpdatePolicy <a name="BatchComputeEnvironmentUpdatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentUpdatePolicy {
    double JobExecutionTimeoutMinutes = null,
    bool|IResolvable TerminateJobsOnUpdate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.jobExecutionTimeoutMinutes">JobExecutionTimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.terminateJobsOnUpdate">TerminateJobsOnUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}. |

---

##### `JobExecutionTimeoutMinutes`<sup>Optional</sup> <a name="JobExecutionTimeoutMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.jobExecutionTimeoutMinutes"></a>

```csharp
public double JobExecutionTimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}.

---

##### `TerminateJobsOnUpdate`<sup>Optional</sup> <a name="TerminateJobsOnUpdate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.terminateJobsOnUpdate"></a>

```csharp
public bool|IResolvable TerminateJobsOnUpdate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchComputeEnvironmentComputeResourcesEc2ConfigurationList <a name="BatchComputeEnvironmentComputeResourcesEc2ConfigurationList" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesEc2ConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get"></a>

```csharp
private BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesEc2Configuration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>[]

---


### BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetBatchImageStatus">ResetBatchImageStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageIdOverride">ResetImageIdOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageKubernetesVersion">ResetImageKubernetesVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageType">ResetImageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchImageStatus` <a name="ResetBatchImageStatus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetBatchImageStatus"></a>

```csharp
private void ResetBatchImageStatus()
```

##### `ResetImageIdOverride` <a name="ResetImageIdOverride" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageIdOverride"></a>

```csharp
private void ResetImageIdOverride()
```

##### `ResetImageKubernetesVersion` <a name="ResetImageKubernetesVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageKubernetesVersion"></a>

```csharp
private void ResetImageKubernetesVersion()
```

##### `ResetImageType` <a name="ResetImageType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageType"></a>

```csharp
private void ResetImageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatusInput">BatchImageStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverrideInput">ImageIdOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersionInput">ImageKubernetesVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageTypeInput">ImageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatus">BatchImageStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride">ImageIdOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersion">ImageKubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchImageStatusInput`<sup>Optional</sup> <a name="BatchImageStatusInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatusInput"></a>

```csharp
public string BatchImageStatusInput { get; }
```

- *Type:* string

---

##### `ImageIdOverrideInput`<sup>Optional</sup> <a name="ImageIdOverrideInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverrideInput"></a>

```csharp
public string ImageIdOverrideInput { get; }
```

- *Type:* string

---

##### `ImageKubernetesVersionInput`<sup>Optional</sup> <a name="ImageKubernetesVersionInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersionInput"></a>

```csharp
public string ImageKubernetesVersionInput { get; }
```

- *Type:* string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageTypeInput"></a>

```csharp
public string ImageTypeInput { get; }
```

- *Type:* string

---

##### `BatchImageStatus`<sup>Required</sup> <a name="BatchImageStatus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatus"></a>

```csharp
public string BatchImageStatus { get; }
```

- *Type:* string

---

##### `ImageIdOverride`<sup>Required</sup> <a name="ImageIdOverride" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride"></a>

```csharp
public string ImageIdOverride { get; }
```

- *Type:* string

---

##### `ImageKubernetesVersion`<sup>Required</sup> <a name="ImageKubernetesVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersion"></a>

```csharp
public string ImageKubernetesVersion { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesEc2Configuration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateId">ResetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateName">ResetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetUserdataType">ResetUserdataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverrides` <a name="PutOverrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.putOverrides"></a>

```csharp
private void PutOverrides(IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.putOverrides.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>[]

---

##### `ResetLaunchTemplateId` <a name="ResetLaunchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```csharp
private void ResetLaunchTemplateId()
```

##### `ResetLaunchTemplateName` <a name="ResetLaunchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```csharp
private void ResetLaunchTemplateName()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetOverrides"></a>

```csharp
private void ResetOverrides()
```

##### `ResetUserdataType` <a name="ResetUserdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetUserdataType"></a>

```csharp
private void ResetUserdataType()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateNameInput">LaunchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overridesInput">OverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataTypeInput">UserdataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataType">UserdataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overrides"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList Overrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList</a>

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```csharp
public string LaunchTemplateIdInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateNameInput`<sup>Optional</sup> <a name="LaunchTemplateNameInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```csharp
public string LaunchTemplateNameInput { get; }
```

- *Type:* string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overridesInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides[] OverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>[]

---

##### `UserdataTypeInput`<sup>Optional</sup> <a name="UserdataTypeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataTypeInput"></a>

```csharp
public string UserdataTypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; }
```

- *Type:* string

---

##### `UserdataType`<sup>Required</sup> <a name="UserdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataType"></a>

```csharp
public string UserdataType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get"></a>

```csharp
private BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>[]

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateId">ResetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateName">ResetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetTargetInstanceTypes">ResetTargetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetUserdataType">ResetUserdataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLaunchTemplateId` <a name="ResetLaunchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateId"></a>

```csharp
private void ResetLaunchTemplateId()
```

##### `ResetLaunchTemplateName` <a name="ResetLaunchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateName"></a>

```csharp
private void ResetLaunchTemplateName()
```

##### `ResetTargetInstanceTypes` <a name="ResetTargetInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetTargetInstanceTypes"></a>

```csharp
private void ResetTargetInstanceTypes()
```

##### `ResetUserdataType` <a name="ResetUserdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetUserdataType"></a>

```csharp
private void ResetUserdataType()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateNameInput">LaunchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypesInput">TargetInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataTypeInput">UserdataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypes">TargetInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataType">UserdataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateIdInput"></a>

```csharp
public string LaunchTemplateIdInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateNameInput`<sup>Optional</sup> <a name="LaunchTemplateNameInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateNameInput"></a>

```csharp
public string LaunchTemplateNameInput { get; }
```

- *Type:* string

---

##### `TargetInstanceTypesInput`<sup>Optional</sup> <a name="TargetInstanceTypesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypesInput"></a>

```csharp
public string[] TargetInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `UserdataTypeInput`<sup>Optional</sup> <a name="UserdataTypeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataTypeInput"></a>

```csharp
public string UserdataTypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; }
```

- *Type:* string

---

##### `TargetInstanceTypes`<sup>Required</sup> <a name="TargetInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypes"></a>

```csharp
public string[] TargetInstanceTypes { get; }
```

- *Type:* string[]

---

##### `UserdataType`<sup>Required</sup> <a name="UserdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataType"></a>

```csharp
public string UserdataType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resetScaleInAfter">ResetScaleInAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScaleInAfter` <a name="ResetScaleInAfter" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resetScaleInAfter"></a>

```csharp
private void ResetScaleInAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfterInput">ScaleInAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfter">ScaleInAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleInAfterInput`<sup>Optional</sup> <a name="ScaleInAfterInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfterInput"></a>

```csharp
public double ScaleInAfterInput { get; }
```

- *Type:* double

---

##### `ScaleInAfter`<sup>Required</sup> <a name="ScaleInAfter" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfter"></a>

```csharp
public double ScaleInAfter { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resetReservationGroupArn">ResetReservationGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resetReservationPreference">ResetReservationPreference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReservationGroupArn` <a name="ResetReservationGroupArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resetReservationGroupArn"></a>

```csharp
private void ResetReservationGroupArn()
```

##### `ResetReservationPreference` <a name="ResetReservationPreference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resetReservationPreference"></a>

```csharp
private void ResetReservationPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArnInput">ReservationGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreferenceInput">ReservationPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArn">ReservationGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreference">ReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReservationGroupArnInput`<sup>Optional</sup> <a name="ReservationGroupArnInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArnInput"></a>

```csharp
public string ReservationGroupArnInput { get; }
```

- *Type:* string

---

##### `ReservationPreferenceInput`<sup>Optional</sup> <a name="ReservationPreferenceInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreferenceInput"></a>

```csharp
public string ReservationPreferenceInput { get; }
```

- *Type:* string

---

##### `ReservationGroupArn`<sup>Required</sup> <a name="ReservationGroupArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArn"></a>

```csharp
public string ReservationGroupArn { get; }
```

- *Type:* string

---

##### `ReservationPreference`<sup>Required</sup> <a name="ReservationPreference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreference"></a>

```csharp
public string ReservationPreference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resetAllowedInstanceTypes">ResetAllowedInstanceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedInstanceTypes` <a name="ResetAllowedInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resetAllowedInstanceTypes"></a>

```csharp
private void ResetAllowedInstanceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypesInput">AllowedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedInstanceTypesInput`<sup>Optional</sup> <a name="AllowedInstanceTypesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypesInput"></a>

```csharp
public string[] AllowedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resetUseLocalStorage">ResetUseLocalStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseLocalStorage` <a name="ResetUseLocalStorage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resetUseLocalStorage"></a>

```csharp
private void ResetUseLocalStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorageInput">UseLocalStorageInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorage">UseLocalStorage</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UseLocalStorageInput`<sup>Optional</sup> <a name="UseLocalStorageInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorageInput"></a>

```csharp
public bool|IResolvable UseLocalStorageInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseLocalStorage`<sup>Required</sup> <a name="UseLocalStorage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorage"></a>

```csharp
public bool|IResolvable UseLocalStorage { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putCapacityReservations">PutCapacityReservations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putInstanceRequirements">PutInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putLocalStorageConfiguration">PutLocalStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putStorageConfiguration">PutStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetCapacityOptionType">ResetCapacityOptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetCapacityReservations">ResetCapacityReservations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetEc2InstanceProfileArn">ResetEc2InstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetFipsEnabled">ResetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetInstanceMetadataTagsPropagation">ResetInstanceMetadataTagsPropagation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetInstanceRequirements">ResetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetLocalStorageConfiguration">ResetLocalStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetStorageConfiguration">ResetStorageConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservations` <a name="PutCapacityReservations" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putCapacityReservations"></a>

```csharp
private void PutCapacityReservations(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putCapacityReservations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a>

---

##### `PutInstanceRequirements` <a name="PutInstanceRequirements" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putInstanceRequirements"></a>

```csharp
private void PutInstanceRequirements(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a>

---

##### `PutLocalStorageConfiguration` <a name="PutLocalStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putLocalStorageConfiguration"></a>

```csharp
private void PutLocalStorageConfiguration(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putLocalStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a>

---

##### `PutStorageConfiguration` <a name="PutStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putStorageConfiguration"></a>

```csharp
private void PutStorageConfiguration(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a>

---

##### `ResetCapacityOptionType` <a name="ResetCapacityOptionType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetCapacityOptionType"></a>

```csharp
private void ResetCapacityOptionType()
```

##### `ResetCapacityReservations` <a name="ResetCapacityReservations" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetCapacityReservations"></a>

```csharp
private void ResetCapacityReservations()
```

##### `ResetEc2InstanceProfileArn` <a name="ResetEc2InstanceProfileArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetEc2InstanceProfileArn"></a>

```csharp
private void ResetEc2InstanceProfileArn()
```

##### `ResetFipsEnabled` <a name="ResetFipsEnabled" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetFipsEnabled"></a>

```csharp
private void ResetFipsEnabled()
```

##### `ResetInstanceMetadataTagsPropagation` <a name="ResetInstanceMetadataTagsPropagation" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetInstanceMetadataTagsPropagation"></a>

```csharp
private void ResetInstanceMetadataTagsPropagation()
```

##### `ResetInstanceRequirements` <a name="ResetInstanceRequirements" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetInstanceRequirements"></a>

```csharp
private void ResetInstanceRequirements()
```

##### `ResetLocalStorageConfiguration` <a name="ResetLocalStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetLocalStorageConfiguration"></a>

```csharp
private void ResetLocalStorageConfiguration()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetStorageConfiguration` <a name="ResetStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetStorageConfiguration"></a>

```csharp
private void ResetStorageConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservations">CapacityReservations</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfiguration">LocalStorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfiguration">StorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionTypeInput">CapacityOptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservationsInput">CapacityReservationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArnInput">Ec2InstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabledInput">FipsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagationInput">InstanceMetadataTagsPropagationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirementsInput">InstanceRequirementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfigurationInput">LocalStorageConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoringInput">MonitoringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfigurationInput">StorageConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionType">CapacityOptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArn">Ec2InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabled">FipsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagation">InstanceMetadataTagsPropagation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoring">Monitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityReservations`<sup>Required</sup> <a name="CapacityReservations" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservations"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference CapacityReservations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference</a>

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirements"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference InstanceRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference</a>

---

##### `LocalStorageConfiguration`<sup>Required</sup> <a name="LocalStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfiguration"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference LocalStorageConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfiguration"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference</a>

---

##### `StorageConfiguration`<sup>Required</sup> <a name="StorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfiguration"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference StorageConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference</a>

---

##### `CapacityOptionTypeInput`<sup>Optional</sup> <a name="CapacityOptionTypeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionTypeInput"></a>

```csharp
public string CapacityOptionTypeInput { get; }
```

- *Type:* string

---

##### `CapacityReservationsInput`<sup>Optional</sup> <a name="CapacityReservationsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservationsInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations CapacityReservationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a>

---

##### `Ec2InstanceProfileArnInput`<sup>Optional</sup> <a name="Ec2InstanceProfileArnInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArnInput"></a>

```csharp
public string Ec2InstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `FipsEnabledInput`<sup>Optional</sup> <a name="FipsEnabledInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabledInput"></a>

```csharp
public bool|IResolvable FipsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceMetadataTagsPropagationInput`<sup>Optional</sup> <a name="InstanceMetadataTagsPropagationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagationInput"></a>

```csharp
public bool|IResolvable InstanceMetadataTagsPropagationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceRequirementsInput`<sup>Optional</sup> <a name="InstanceRequirementsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirementsInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements InstanceRequirementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a>

---

##### `LocalStorageConfigurationInput`<sup>Optional</sup> <a name="LocalStorageConfigurationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfigurationInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration LocalStorageConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a>

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoringInput"></a>

```csharp
public string MonitoringInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfigurationInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a>

---

##### `StorageConfigurationInput`<sup>Optional</sup> <a name="StorageConfigurationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfigurationInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration StorageConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a>

---

##### `CapacityOptionType`<sup>Required</sup> <a name="CapacityOptionType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionType"></a>

```csharp
public string CapacityOptionType { get; }
```

- *Type:* string

---

##### `Ec2InstanceProfileArn`<sup>Required</sup> <a name="Ec2InstanceProfileArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArn"></a>

```csharp
public string Ec2InstanceProfileArn { get; }
```

- *Type:* string

---

##### `FipsEnabled`<sup>Required</sup> <a name="FipsEnabled" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabled"></a>

```csharp
public bool|IResolvable FipsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceMetadataTagsPropagation`<sup>Required</sup> <a name="InstanceMetadataTagsPropagation" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagation"></a>

```csharp
public bool|IResolvable InstanceMetadataTagsPropagation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoring"></a>

```csharp
public string Monitoring { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resetStorageSizeGiB">ResetStorageSizeGiB</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageSizeGiB` <a name="ResetStorageSizeGiB" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resetStorageSizeGiB"></a>

```csharp
private void ResetStorageSizeGiB()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiBInput">StorageSizeGiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiB">StorageSizeGiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageSizeGiBInput`<sup>Optional</sup> <a name="StorageSizeGiBInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiBInput"></a>

```csharp
public double StorageSizeGiBInput { get; }
```

- *Type:* double

---

##### `StorageSizeGiB`<sup>Required</sup> <a name="StorageSizeGiB" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiB"></a>

```csharp
public double StorageSizeGiB { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInfrastructureOptimization">PutInfrastructureOptimization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInstanceLaunchTemplate">PutInstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInfrastructureOptimization">ResetInfrastructureOptimization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInfrastructureRoleArn">ResetInfrastructureRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInstanceLaunchTemplate">ResetInstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetPropagateTags">ResetPropagateTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfrastructureOptimization` <a name="PutInfrastructureOptimization" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInfrastructureOptimization"></a>

```csharp
private void PutInfrastructureOptimization(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInfrastructureOptimization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a>

---

##### `PutInstanceLaunchTemplate` <a name="PutInstanceLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInstanceLaunchTemplate"></a>

```csharp
private void PutInstanceLaunchTemplate(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInstanceLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a>

---

##### `ResetInfrastructureOptimization` <a name="ResetInfrastructureOptimization" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInfrastructureOptimization"></a>

```csharp
private void ResetInfrastructureOptimization()
```

##### `ResetInfrastructureRoleArn` <a name="ResetInfrastructureRoleArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInfrastructureRoleArn"></a>

```csharp
private void ResetInfrastructureRoleArn()
```

##### `ResetInstanceLaunchTemplate` <a name="ResetInstanceLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInstanceLaunchTemplate"></a>

```csharp
private void ResetInstanceLaunchTemplate()
```

##### `ResetPropagateTags` <a name="ResetPropagateTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetPropagateTags"></a>

```csharp
private void ResetPropagateTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimization">InfrastructureOptimization</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplate">InstanceLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimizationInput">InfrastructureOptimizationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArnInput">InfrastructureRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplateInput">InstanceLaunchTemplateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTagsInput">PropagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTags">PropagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InfrastructureOptimization`<sup>Required</sup> <a name="InfrastructureOptimization" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimization"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference InfrastructureOptimization { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference</a>

---

##### `InstanceLaunchTemplate`<sup>Required</sup> <a name="InstanceLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplate"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference InstanceLaunchTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference</a>

---

##### `InfrastructureOptimizationInput`<sup>Optional</sup> <a name="InfrastructureOptimizationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimizationInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization InfrastructureOptimizationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a>

---

##### `InfrastructureRoleArnInput`<sup>Optional</sup> <a name="InfrastructureRoleArnInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArnInput"></a>

```csharp
public string InfrastructureRoleArnInput { get; }
```

- *Type:* string

---

##### `InstanceLaunchTemplateInput`<sup>Optional</sup> <a name="InstanceLaunchTemplateInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplateInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate InstanceLaunchTemplateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a>

---

##### `PropagateTagsInput`<sup>Optional</sup> <a name="PropagateTagsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTagsInput"></a>

```csharp
public string PropagateTagsInput { get; }
```

- *Type:* string

---

##### `InfrastructureRoleArn`<sup>Required</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArn"></a>

```csharp
public string InfrastructureRoleArn { get; }
```

- *Type:* string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTags"></a>

```csharp
public string PropagateTags { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProvider InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a>

---


### BatchComputeEnvironmentComputeResourcesOutputReference <a name="BatchComputeEnvironmentComputeResourcesOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration">PutEc2Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putManagedInstancesProvider">PutManagedInstancesProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putScalingPolicy">PutScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetBidPercentage">ResetBidPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetCapacityTags">ResetCapacityTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetDesiredvCpus">ResetDesiredvCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2Configuration">ResetEc2Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2KeyPair">ResetEc2KeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceRole">ResetInstanceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceTypes">ResetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetLaunchTemplate">ResetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetManagedInstancesProvider">ResetManagedInstancesProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMaxvCpus">ResetMaxvCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMinvCpus">ResetMinvCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetPlacementGroup">ResetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetScalingPolicy">ResetScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSpotIamFleetRole">ResetSpotIamFleetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetUpdateToLatestImageVersion">ResetUpdateToLatestImageVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEc2Configuration` <a name="PutEc2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration"></a>

```csharp
private void PutEc2Configuration(IResolvable|BatchComputeEnvironmentComputeResourcesEc2Configuration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>[]

---

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate"></a>

```csharp
private void PutLaunchTemplate(BatchComputeEnvironmentComputeResourcesLaunchTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---

##### `PutManagedInstancesProvider` <a name="PutManagedInstancesProvider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putManagedInstancesProvider"></a>

```csharp
private void PutManagedInstancesProvider(BatchComputeEnvironmentComputeResourcesManagedInstancesProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putManagedInstancesProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a>

---

##### `PutScalingPolicy` <a name="PutScalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putScalingPolicy"></a>

```csharp
private void PutScalingPolicy(BatchComputeEnvironmentComputeResourcesScalingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

---

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetAllocationStrategy"></a>

```csharp
private void ResetAllocationStrategy()
```

##### `ResetBidPercentage` <a name="ResetBidPercentage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetBidPercentage"></a>

```csharp
private void ResetBidPercentage()
```

##### `ResetCapacityTags` <a name="ResetCapacityTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetCapacityTags"></a>

```csharp
private void ResetCapacityTags()
```

##### `ResetDesiredvCpus` <a name="ResetDesiredvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetDesiredvCpus"></a>

```csharp
private void ResetDesiredvCpus()
```

##### `ResetEc2Configuration` <a name="ResetEc2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2Configuration"></a>

```csharp
private void ResetEc2Configuration()
```

##### `ResetEc2KeyPair` <a name="ResetEc2KeyPair" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2KeyPair"></a>

```csharp
private void ResetEc2KeyPair()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetInstanceRole` <a name="ResetInstanceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceRole"></a>

```csharp
private void ResetInstanceRole()
```

##### `ResetInstanceTypes` <a name="ResetInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceTypes"></a>

```csharp
private void ResetInstanceTypes()
```

##### `ResetLaunchTemplate` <a name="ResetLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetLaunchTemplate"></a>

```csharp
private void ResetLaunchTemplate()
```

##### `ResetManagedInstancesProvider` <a name="ResetManagedInstancesProvider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetManagedInstancesProvider"></a>

```csharp
private void ResetManagedInstancesProvider()
```

##### `ResetMaxvCpus` <a name="ResetMaxvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMaxvCpus"></a>

```csharp
private void ResetMaxvCpus()
```

##### `ResetMinvCpus` <a name="ResetMinvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMinvCpus"></a>

```csharp
private void ResetMinvCpus()
```

##### `ResetPlacementGroup` <a name="ResetPlacementGroup" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetPlacementGroup"></a>

```csharp
private void ResetPlacementGroup()
```

##### `ResetScalingPolicy` <a name="ResetScalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetScalingPolicy"></a>

```csharp
private void ResetScalingPolicy()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSpotIamFleetRole` <a name="ResetSpotIamFleetRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSpotIamFleetRole"></a>

```csharp
private void ResetSpotIamFleetRole()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUpdateToLatestImageVersion` <a name="ResetUpdateToLatestImageVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetUpdateToLatestImageVersion"></a>

```csharp
private void ResetUpdateToLatestImageVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration">Ec2Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList">BatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProvider">ManagedInstancesProvider</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicy">ScalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference">BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentageInput">BidPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTagsInput">CapacityTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpusInput">DesiredvCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2ConfigurationInput">Ec2ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPairInput">Ec2KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRoleInput">InstanceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypesInput">InstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProviderInput">ManagedInstancesProviderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpusInput">MaxvCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpusInput">MinvCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroupInput">PlacementGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicyInput">ScalingPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRoleInput">SpotIamFleetRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersionInput">UpdateToLatestImageVersionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage">BidPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTags">CapacityTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpus">DesiredvCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole">InstanceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpus">MaxvCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpus">MinvCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup">PlacementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole">SpotIamFleetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersion">UpdateToLatestImageVersion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ec2Configuration`<sup>Required</sup> <a name="Ec2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesEc2ConfigurationList Ec2Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList">BatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a>

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference LaunchTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a>

---

##### `ManagedInstancesProvider`<sup>Required</sup> <a name="ManagedInstancesProvider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProvider"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference ManagedInstancesProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference</a>

---

##### `ScalingPolicy`<sup>Required</sup> <a name="ScalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicy"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference ScalingPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference">BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference</a>

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategyInput"></a>

```csharp
public string AllocationStrategyInput { get; }
```

- *Type:* string

---

##### `BidPercentageInput`<sup>Optional</sup> <a name="BidPercentageInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentageInput"></a>

```csharp
public double BidPercentageInput { get; }
```

- *Type:* double

---

##### `CapacityTagsInput`<sup>Optional</sup> <a name="CapacityTagsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CapacityTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DesiredvCpusInput`<sup>Optional</sup> <a name="DesiredvCpusInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpusInput"></a>

```csharp
public double DesiredvCpusInput { get; }
```

- *Type:* double

---

##### `Ec2ConfigurationInput`<sup>Optional</sup> <a name="Ec2ConfigurationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2ConfigurationInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesEc2Configuration[] Ec2ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>[]

---

##### `Ec2KeyPairInput`<sup>Optional</sup> <a name="Ec2KeyPairInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPairInput"></a>

```csharp
public string Ec2KeyPairInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceRoleInput`<sup>Optional</sup> <a name="InstanceRoleInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRoleInput"></a>

```csharp
public string InstanceRoleInput { get; }
```

- *Type:* string

---

##### `InstanceTypesInput`<sup>Optional</sup> <a name="InstanceTypesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypesInput"></a>

```csharp
public string[] InstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplateInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplate LaunchTemplateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---

##### `ManagedInstancesProviderInput`<sup>Optional</sup> <a name="ManagedInstancesProviderInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProviderInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProvider ManagedInstancesProviderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a>

---

##### `MaxvCpusInput`<sup>Optional</sup> <a name="MaxvCpusInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpusInput"></a>

```csharp
public double MaxvCpusInput { get; }
```

- *Type:* double

---

##### `MinvCpusInput`<sup>Optional</sup> <a name="MinvCpusInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpusInput"></a>

```csharp
public double MinvCpusInput { get; }
```

- *Type:* double

---

##### `PlacementGroupInput`<sup>Optional</sup> <a name="PlacementGroupInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroupInput"></a>

```csharp
public string PlacementGroupInput { get; }
```

- *Type:* string

---

##### `ScalingPolicyInput`<sup>Optional</sup> <a name="ScalingPolicyInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicyInput"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesScalingPolicy ScalingPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SpotIamFleetRoleInput`<sup>Optional</sup> <a name="SpotIamFleetRoleInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRoleInput"></a>

```csharp
public string SpotIamFleetRoleInput { get; }
```

- *Type:* string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UpdateToLatestImageVersionInput`<sup>Optional</sup> <a name="UpdateToLatestImageVersionInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersionInput"></a>

```csharp
public bool|IResolvable UpdateToLatestImageVersionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `BidPercentage`<sup>Required</sup> <a name="BidPercentage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage"></a>

```csharp
public double BidPercentage { get; }
```

- *Type:* double

---

##### `CapacityTags`<sup>Required</sup> <a name="CapacityTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CapacityTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DesiredvCpus`<sup>Required</sup> <a name="DesiredvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpus"></a>

```csharp
public double DesiredvCpus { get; }
```

- *Type:* double

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair"></a>

```csharp
public string Ec2KeyPair { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceRole`<sup>Required</sup> <a name="InstanceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole"></a>

```csharp
public string InstanceRole { get; }
```

- *Type:* string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; }
```

- *Type:* string[]

---

##### `MaxvCpus`<sup>Required</sup> <a name="MaxvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpus"></a>

```csharp
public double MaxvCpus { get; }
```

- *Type:* double

---

##### `MinvCpus`<sup>Required</sup> <a name="MinvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpus"></a>

```csharp
public double MinvCpus { get; }
```

- *Type:* double

---

##### `PlacementGroup`<sup>Required</sup> <a name="PlacementGroup" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup"></a>

```csharp
public string PlacementGroup { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SpotIamFleetRole`<sup>Required</sup> <a name="SpotIamFleetRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole"></a>

```csharp
public string SpotIamFleetRole { get; }
```

- *Type:* string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateToLatestImageVersion`<sup>Required</sup> <a name="UpdateToLatestImageVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersion"></a>

```csharp
public bool|IResolvable UpdateToLatestImageVersion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---


### BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference <a name="BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resetMinScaleDownDelayMinutes">ResetMinScaleDownDelayMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinScaleDownDelayMinutes` <a name="ResetMinScaleDownDelayMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resetMinScaleDownDelayMinutes"></a>

```csharp
private void ResetMinScaleDownDelayMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutesInput">MinScaleDownDelayMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutes">MinScaleDownDelayMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinScaleDownDelayMinutesInput`<sup>Optional</sup> <a name="MinScaleDownDelayMinutesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutesInput"></a>

```csharp
public double MinScaleDownDelayMinutesInput { get; }
```

- *Type:* double

---

##### `MinScaleDownDelayMinutes`<sup>Required</sup> <a name="MinScaleDownDelayMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutes"></a>

```csharp
public double MinScaleDownDelayMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentComputeResourcesScalingPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

---


### BatchComputeEnvironmentEksConfigurationOutputReference <a name="BatchComputeEnvironmentEksConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentEksConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetEksClusterArn">ResetEksClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetKubernetesNamespace">ResetKubernetesNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEksClusterArn` <a name="ResetEksClusterArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetEksClusterArn"></a>

```csharp
private void ResetEksClusterArn()
```

##### `ResetKubernetesNamespace` <a name="ResetKubernetesNamespace" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetKubernetesNamespace"></a>

```csharp
private void ResetKubernetesNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArnInput">EksClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespaceInput">KubernetesNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn">EksClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EksClusterArnInput`<sup>Optional</sup> <a name="EksClusterArnInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArnInput"></a>

```csharp
public string EksClusterArnInput { get; }
```

- *Type:* string

---

##### `KubernetesNamespaceInput`<sup>Optional</sup> <a name="KubernetesNamespaceInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespaceInput"></a>

```csharp
public string KubernetesNamespaceInput { get; }
```

- *Type:* string

---

##### `EksClusterArn`<sup>Required</sup> <a name="EksClusterArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn"></a>

```csharp
public string EksClusterArn { get; }
```

- *Type:* string

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentEksConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---


### BatchComputeEnvironmentUpdatePolicyOutputReference <a name="BatchComputeEnvironmentUpdatePolicyOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchComputeEnvironmentUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetJobExecutionTimeoutMinutes">ResetJobExecutionTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetTerminateJobsOnUpdate">ResetTerminateJobsOnUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJobExecutionTimeoutMinutes` <a name="ResetJobExecutionTimeoutMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetJobExecutionTimeoutMinutes"></a>

```csharp
private void ResetJobExecutionTimeoutMinutes()
```

##### `ResetTerminateJobsOnUpdate` <a name="ResetTerminateJobsOnUpdate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetTerminateJobsOnUpdate"></a>

```csharp
private void ResetTerminateJobsOnUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutesInput">JobExecutionTimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdateInput">TerminateJobsOnUpdateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes">JobExecutionTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate">TerminateJobsOnUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobExecutionTimeoutMinutesInput`<sup>Optional</sup> <a name="JobExecutionTimeoutMinutesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutesInput"></a>

```csharp
public double JobExecutionTimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `TerminateJobsOnUpdateInput`<sup>Optional</sup> <a name="TerminateJobsOnUpdateInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdateInput"></a>

```csharp
public bool|IResolvable TerminateJobsOnUpdateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JobExecutionTimeoutMinutes`<sup>Required</sup> <a name="JobExecutionTimeoutMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes"></a>

```csharp
public double JobExecutionTimeoutMinutes { get; }
```

- *Type:* double

---

##### `TerminateJobsOnUpdate`<sup>Required</sup> <a name="TerminateJobsOnUpdate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate"></a>

```csharp
public bool|IResolvable TerminateJobsOnUpdate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchComputeEnvironmentUpdatePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---



