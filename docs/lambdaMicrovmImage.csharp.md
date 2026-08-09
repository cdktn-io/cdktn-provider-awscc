# `lambdaMicrovmImage` Submodule <a name="`lambdaMicrovmImage` Submodule" id="@cdktn/provider-awscc.lambdaMicrovmImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaMicrovmImage <a name="LambdaMicrovmImage" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image awscc_lambda_microvm_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImage(Construct Scope, string Id, LambdaMicrovmImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig">LambdaMicrovmImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig">LambdaMicrovmImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact">PutCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations">PutCpuConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables">PutEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks">PutHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCodeArtifact` <a name="PutCodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact"></a>

```csharp
private void PutCodeArtifact(LambdaMicrovmImageCodeArtifact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---

##### `PutCpuConfigurations` <a name="PutCpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations"></a>

```csharp
private void PutCpuConfigurations(IResolvable|LambdaMicrovmImageCpuConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]

---

##### `PutEnvironmentVariables` <a name="PutEnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables"></a>

```csharp
private void PutEnvironmentVariables(IResolvable|LambdaMicrovmImageEnvironmentVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]

---

##### `PutHooks` <a name="PutHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks"></a>

```csharp
private void PutHooks(LambdaMicrovmImageHooks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging"></a>

```csharp
private void PutLogging(LambdaMicrovmImageLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---

##### `PutResources` <a name="PutResources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources"></a>

```csharp
private void PutResources(IResolvable|LambdaMicrovmImageResources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags"></a>

```csharp
private void PutTags(IResolvable|LambdaMicrovmImageTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaMicrovmImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaMicrovmImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaMicrovmImage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaMicrovmImage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaMicrovmImage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaMicrovmImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaMicrovmImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifact">CodeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference">LambdaMicrovmImageCodeArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurations">CpuConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList">LambdaMicrovmImageCpuConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariables">EnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList">LambdaMicrovmImageEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooks">Hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.imageArn">ImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestActiveImageVersion">LatestActiveImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestFailedImageVersion">LatestFailedImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference">LambdaMicrovmImageLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList">LambdaMicrovmImageResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList">LambdaMicrovmImageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilitiesInput">AdditionalOsCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArnInput">BaseImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersionInput">BaseImageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArnInput">BuildRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifactInput">CodeArtifactInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurationsInput">CpuConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectorsInput">EgressNetworkConnectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooksInput">HooksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.loggingInput">LoggingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resourcesInput">ResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilities">AdditionalOsCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArn">BaseImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersion">BaseImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArn">BuildRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CodeArtifact`<sup>Required</sup> <a name="CodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifact"></a>

```csharp
public LambdaMicrovmImageCodeArtifactOutputReference CodeArtifact { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference">LambdaMicrovmImageCodeArtifactOutputReference</a>

---

##### `CpuConfigurations`<sup>Required</sup> <a name="CpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurations"></a>

```csharp
public LambdaMicrovmImageCpuConfigurationsList CpuConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList">LambdaMicrovmImageCpuConfigurationsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariables"></a>

```csharp
public LambdaMicrovmImageEnvironmentVariablesList EnvironmentVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList">LambdaMicrovmImageEnvironmentVariablesList</a>

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooks"></a>

```csharp
public LambdaMicrovmImageHooksOutputReference Hooks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.imageArn"></a>

```csharp
public string ImageArn { get; }
```

- *Type:* string

---

##### `LatestActiveImageVersion`<sup>Required</sup> <a name="LatestActiveImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestActiveImageVersion"></a>

```csharp
public string LatestActiveImageVersion { get; }
```

- *Type:* string

---

##### `LatestFailedImageVersion`<sup>Required</sup> <a name="LatestFailedImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestFailedImageVersion"></a>

```csharp
public string LatestFailedImageVersion { get; }
```

- *Type:* string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.logging"></a>

```csharp
public LambdaMicrovmImageLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference">LambdaMicrovmImageLoggingOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resources"></a>

```csharp
public LambdaMicrovmImageResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList">LambdaMicrovmImageResourcesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tags"></a>

```csharp
public LambdaMicrovmImageTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList">LambdaMicrovmImageTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AdditionalOsCapabilitiesInput`<sup>Optional</sup> <a name="AdditionalOsCapabilitiesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilitiesInput"></a>

```csharp
public string[] AdditionalOsCapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `BaseImageArnInput`<sup>Optional</sup> <a name="BaseImageArnInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArnInput"></a>

```csharp
public string BaseImageArnInput { get; }
```

- *Type:* string

---

##### `BaseImageVersionInput`<sup>Optional</sup> <a name="BaseImageVersionInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersionInput"></a>

```csharp
public string BaseImageVersionInput { get; }
```

- *Type:* string

---

##### `BuildRoleArnInput`<sup>Optional</sup> <a name="BuildRoleArnInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArnInput"></a>

```csharp
public string BuildRoleArnInput { get; }
```

- *Type:* string

---

##### `CodeArtifactInput`<sup>Optional</sup> <a name="CodeArtifactInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifactInput"></a>

```csharp
public IResolvable|LambdaMicrovmImageCodeArtifact CodeArtifactInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---

##### `CpuConfigurationsInput`<sup>Optional</sup> <a name="CpuConfigurationsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurationsInput"></a>

```csharp
public IResolvable|LambdaMicrovmImageCpuConfigurations[] CpuConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EgressNetworkConnectorsInput`<sup>Optional</sup> <a name="EgressNetworkConnectorsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectorsInput"></a>

```csharp
public string[] EgressNetworkConnectorsInput { get; }
```

- *Type:* string[]

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariablesInput"></a>

```csharp
public IResolvable|LambdaMicrovmImageEnvironmentVariables[] EnvironmentVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]

---

##### `HooksInput`<sup>Optional</sup> <a name="HooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooksInput"></a>

```csharp
public IResolvable|LambdaMicrovmImageHooks HooksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.loggingInput"></a>

```csharp
public IResolvable|LambdaMicrovmImageLogging LoggingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resourcesInput"></a>

```csharp
public IResolvable|LambdaMicrovmImageResources[] ResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tagsInput"></a>

```csharp
public IResolvable|LambdaMicrovmImageTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]

---

##### `AdditionalOsCapabilities`<sup>Required</sup> <a name="AdditionalOsCapabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilities"></a>

```csharp
public string[] AdditionalOsCapabilities { get; }
```

- *Type:* string[]

---

##### `BaseImageArn`<sup>Required</sup> <a name="BaseImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArn"></a>

```csharp
public string BaseImageArn { get; }
```

- *Type:* string

---

##### `BaseImageVersion`<sup>Required</sup> <a name="BaseImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersion"></a>

```csharp
public string BaseImageVersion { get; }
```

- *Type:* string

---

##### `BuildRoleArn`<sup>Required</sup> <a name="BuildRoleArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArn"></a>

```csharp
public string BuildRoleArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EgressNetworkConnectors`<sup>Required</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectors"></a>

```csharp
public string[] EgressNetworkConnectors { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaMicrovmImageCodeArtifact <a name="LambdaMicrovmImageCodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageCodeArtifact {
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}.

---

### LambdaMicrovmImageConfig <a name="LambdaMicrovmImageConfig" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AdditionalOsCapabilities,
    string BaseImageArn,
    string BaseImageVersion,
    string BuildRoleArn,
    LambdaMicrovmImageCodeArtifact CodeArtifact,
    IResolvable|LambdaMicrovmImageCpuConfigurations[] CpuConfigurations,
    string Description,
    string[] EgressNetworkConnectors,
    IResolvable|LambdaMicrovmImageEnvironmentVariables[] EnvironmentVariables,
    LambdaMicrovmImageHooks Hooks,
    LambdaMicrovmImageLogging Logging,
    string Name,
    IResolvable|LambdaMicrovmImageResources[] Resources,
    IResolvable|LambdaMicrovmImageTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.additionalOsCapabilities">AdditionalOsCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageArn">BaseImageArn</a></code> | <code>string</code> | ARN of the base MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageVersion">BaseImageVersion</a></code> | <code>string</code> | Specific version of the base MicroVM image to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.buildRoleArn">BuildRoleArn</a></code> | <code>string</code> | ARN of the IAM build role. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.codeArtifact">CodeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | Code artifact for the active MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.cpuConfigurations">CpuConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.description">Description</a></code> | <code>string</code> | Human-readable description of the MicroVM image and its purpose. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]</code> | Environment variables to set in the container during the snapshot build. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.hooks">Hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | Configuration for MicroVM image logging. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the MicroVM image within the account. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.resources">Resources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]</code> | Key-value pairs to associate with the MicroVM image for organization and management. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalOsCapabilities`<sup>Required</sup> <a name="AdditionalOsCapabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.additionalOsCapabilities"></a>

```csharp
public string[] AdditionalOsCapabilities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}.

---

##### `BaseImageArn`<sup>Required</sup> <a name="BaseImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageArn"></a>

```csharp
public string BaseImageArn { get; set; }
```

- *Type:* string

ARN of the base MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#base_image_arn LambdaMicrovmImage#base_image_arn}

---

##### `BaseImageVersion`<sup>Required</sup> <a name="BaseImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageVersion"></a>

```csharp
public string BaseImageVersion { get; set; }
```

- *Type:* string

Specific version of the base MicroVM image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#base_image_version LambdaMicrovmImage#base_image_version}

---

##### `BuildRoleArn`<sup>Required</sup> <a name="BuildRoleArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.buildRoleArn"></a>

```csharp
public string BuildRoleArn { get; set; }
```

- *Type:* string

ARN of the IAM build role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#build_role_arn LambdaMicrovmImage#build_role_arn}

---

##### `CodeArtifact`<sup>Required</sup> <a name="CodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.codeArtifact"></a>

```csharp
public LambdaMicrovmImageCodeArtifact CodeArtifact { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

Code artifact for the active MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#code_artifact LambdaMicrovmImage#code_artifact}

---

##### `CpuConfigurations`<sup>Required</sup> <a name="CpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.cpuConfigurations"></a>

```csharp
public IResolvable|LambdaMicrovmImageCpuConfigurations[] CpuConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}.

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the MicroVM image and its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#description LambdaMicrovmImage#description}

---

##### `EgressNetworkConnectors`<sup>Required</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.egressNetworkConnectors"></a>

```csharp
public string[] EgressNetworkConnectors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}.

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.environmentVariables"></a>

```csharp
public IResolvable|LambdaMicrovmImageEnvironmentVariables[] EnvironmentVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]

Environment variables to set in the container during the snapshot build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#environment_variables LambdaMicrovmImage#environment_variables}

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.hooks"></a>

```csharp
public LambdaMicrovmImageHooks Hooks { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}.

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.logging"></a>

```csharp
public LambdaMicrovmImageLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

Configuration for MicroVM image logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#logging LambdaMicrovmImage#logging}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the MicroVM image within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#name LambdaMicrovmImage#name}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.resources"></a>

```csharp
public IResolvable|LambdaMicrovmImageResources[] Resources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.tags"></a>

```csharp
public IResolvable|LambdaMicrovmImageTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]

Key-value pairs to associate with the MicroVM image for organization and management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#tags LambdaMicrovmImage#tags}

---

### LambdaMicrovmImageCpuConfigurations <a name="LambdaMicrovmImageCpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageCpuConfigurations {
    string Architecture
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.property.architecture">Architecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}. |

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.property.architecture"></a>

```csharp
public string Architecture { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}.

---

### LambdaMicrovmImageEnvironmentVariables <a name="LambdaMicrovmImageEnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageEnvironmentVariables {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}.

---

### LambdaMicrovmImageHooks <a name="LambdaMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageHooks {
    LambdaMicrovmImageHooksMicrovmHooks MicrovmHooks = null,
    LambdaMicrovmImageHooksMicrovmImageHooks MicrovmImageHooks = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmHooks">MicrovmHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmImageHooks">MicrovmImageHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}. |

---

##### `MicrovmHooks`<sup>Optional</sup> <a name="MicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmHooks"></a>

```csharp
public LambdaMicrovmImageHooksMicrovmHooks MicrovmHooks { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}.

---

##### `MicrovmImageHooks`<sup>Optional</sup> <a name="MicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmImageHooks"></a>

```csharp
public LambdaMicrovmImageHooksMicrovmImageHooks MicrovmImageHooks { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}.

---

### LambdaMicrovmImageHooksMicrovmHooks <a name="LambdaMicrovmImageHooksMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageHooksMicrovmHooks {
    string Resume = null,
    double ResumeTimeoutInSeconds = null,
    string Run = null,
    double RunTimeoutInSeconds = null,
    string Suspend = null,
    double SuspendTimeoutInSeconds = null,
    string Terminate = null,
    double TerminateTimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resume">Resume</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resumeTimeoutInSeconds">ResumeTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.run">Run</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.runTimeoutInSeconds">RunTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspend">Suspend</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspendTimeoutInSeconds">SuspendTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminate">Terminate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminateTimeoutInSeconds">TerminateTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}. |

---

##### `Resume`<sup>Optional</sup> <a name="Resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resume"></a>

```csharp
public string Resume { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}.

---

##### `ResumeTimeoutInSeconds`<sup>Optional</sup> <a name="ResumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resumeTimeoutInSeconds"></a>

```csharp
public double ResumeTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}.

---

##### `Run`<sup>Optional</sup> <a name="Run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.run"></a>

```csharp
public string Run { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}.

---

##### `RunTimeoutInSeconds`<sup>Optional</sup> <a name="RunTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.runTimeoutInSeconds"></a>

```csharp
public double RunTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}.

---

##### `Suspend`<sup>Optional</sup> <a name="Suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspend"></a>

```csharp
public string Suspend { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}.

---

##### `SuspendTimeoutInSeconds`<sup>Optional</sup> <a name="SuspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspendTimeoutInSeconds"></a>

```csharp
public double SuspendTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}.

---

##### `Terminate`<sup>Optional</sup> <a name="Terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminate"></a>

```csharp
public string Terminate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}.

---

##### `TerminateTimeoutInSeconds`<sup>Optional</sup> <a name="TerminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminateTimeoutInSeconds"></a>

```csharp
public double TerminateTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}.

---

### LambdaMicrovmImageHooksMicrovmImageHooks <a name="LambdaMicrovmImageHooksMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageHooksMicrovmImageHooks {
    string Ready = null,
    double ReadyTimeoutInSeconds = null,
    string Validate = null,
    double ValidateTimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.ready">Ready</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.readyTimeoutInSeconds">ReadyTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validate">Validate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validateTimeoutInSeconds">ValidateTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}. |

---

##### `Ready`<sup>Optional</sup> <a name="Ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.ready"></a>

```csharp
public string Ready { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}.

---

##### `ReadyTimeoutInSeconds`<sup>Optional</sup> <a name="ReadyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.readyTimeoutInSeconds"></a>

```csharp
public double ReadyTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}.

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validate"></a>

```csharp
public string Validate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}.

---

##### `ValidateTimeoutInSeconds`<sup>Optional</sup> <a name="ValidateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validateTimeoutInSeconds"></a>

```csharp
public double ValidateTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}.

---

### LambdaMicrovmImageLogging <a name="LambdaMicrovmImageLogging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageLogging {
    LambdaMicrovmImageLoggingCloudwatch Cloudwatch = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}. |

---

##### `Cloudwatch`<sup>Optional</sup> <a name="Cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.cloudwatch"></a>

```csharp
public LambdaMicrovmImageLoggingCloudwatch Cloudwatch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}.

---

### LambdaMicrovmImageLoggingCloudwatch <a name="LambdaMicrovmImageLoggingCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageLoggingCloudwatch {
    string LogGroup = null,
    string LogStream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logGroup">LogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logStream">LogStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}.

---

##### `LogStream`<sup>Optional</sup> <a name="LogStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logStream"></a>

```csharp
public string LogStream { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}.

---

### LambdaMicrovmImageResources <a name="LambdaMicrovmImageResources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageResources {
    double MinimumMemoryInMiB
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.property.minimumMemoryInMiB">MinimumMemoryInMiB</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}. |

---

##### `MinimumMemoryInMiB`<sup>Required</sup> <a name="MinimumMemoryInMiB" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.property.minimumMemoryInMiB"></a>

```csharp
public double MinimumMemoryInMiB { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}.

---

### LambdaMicrovmImageTags <a name="LambdaMicrovmImageTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaMicrovmImageCodeArtifactOutputReference <a name="LambdaMicrovmImageCodeArtifactOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageCodeArtifactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageCodeArtifact InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---


### LambdaMicrovmImageCpuConfigurationsList <a name="LambdaMicrovmImageCpuConfigurationsList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageCpuConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get"></a>

```csharp
private LambdaMicrovmImageCpuConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageCpuConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]

---


### LambdaMicrovmImageCpuConfigurationsOutputReference <a name="LambdaMicrovmImageCpuConfigurationsOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageCpuConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architectureInput">ArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architectureInput"></a>

```csharp
public string ArchitectureInput { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageCpuConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>

---


### LambdaMicrovmImageEnvironmentVariablesList <a name="LambdaMicrovmImageEnvironmentVariablesList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageEnvironmentVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get"></a>

```csharp
private LambdaMicrovmImageEnvironmentVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageEnvironmentVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]

---


### LambdaMicrovmImageEnvironmentVariablesOutputReference <a name="LambdaMicrovmImageEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageEnvironmentVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageEnvironmentVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>

---


### LambdaMicrovmImageHooksMicrovmHooksOutputReference <a name="LambdaMicrovmImageHooksMicrovmHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageHooksMicrovmHooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResume">ResetResume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResumeTimeoutInSeconds">ResetResumeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRun">ResetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRunTimeoutInSeconds">ResetRunTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspend">ResetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspendTimeoutInSeconds">ResetSuspendTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminate">ResetTerminate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminateTimeoutInSeconds">ResetTerminateTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResume` <a name="ResetResume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResume"></a>

```csharp
private void ResetResume()
```

##### `ResetResumeTimeoutInSeconds` <a name="ResetResumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResumeTimeoutInSeconds"></a>

```csharp
private void ResetResumeTimeoutInSeconds()
```

##### `ResetRun` <a name="ResetRun" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRun"></a>

```csharp
private void ResetRun()
```

##### `ResetRunTimeoutInSeconds` <a name="ResetRunTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRunTimeoutInSeconds"></a>

```csharp
private void ResetRunTimeoutInSeconds()
```

##### `ResetSuspend` <a name="ResetSuspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspend"></a>

```csharp
private void ResetSuspend()
```

##### `ResetSuspendTimeoutInSeconds` <a name="ResetSuspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspendTimeoutInSeconds"></a>

```csharp
private void ResetSuspendTimeoutInSeconds()
```

##### `ResetTerminate` <a name="ResetTerminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminate"></a>

```csharp
private void ResetTerminate()
```

##### `ResetTerminateTimeoutInSeconds` <a name="ResetTerminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminateTimeoutInSeconds"></a>

```csharp
private void ResetTerminateTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeInput">ResumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSecondsInput">ResumeTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runInput">RunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSecondsInput">RunTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendInput">SuspendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSecondsInput">SuspendTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateInput">TerminateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSecondsInput">TerminateTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume">Resume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">ResumeTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run">Run</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">RunTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend">Suspend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">SuspendTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate">Terminate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">TerminateTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResumeInput`<sup>Optional</sup> <a name="ResumeInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeInput"></a>

```csharp
public string ResumeInput { get; }
```

- *Type:* string

---

##### `ResumeTimeoutInSecondsInput`<sup>Optional</sup> <a name="ResumeTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSecondsInput"></a>

```csharp
public double ResumeTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `RunInput`<sup>Optional</sup> <a name="RunInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runInput"></a>

```csharp
public string RunInput { get; }
```

- *Type:* string

---

##### `RunTimeoutInSecondsInput`<sup>Optional</sup> <a name="RunTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSecondsInput"></a>

```csharp
public double RunTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `SuspendInput`<sup>Optional</sup> <a name="SuspendInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendInput"></a>

```csharp
public string SuspendInput { get; }
```

- *Type:* string

---

##### `SuspendTimeoutInSecondsInput`<sup>Optional</sup> <a name="SuspendTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSecondsInput"></a>

```csharp
public double SuspendTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `TerminateInput`<sup>Optional</sup> <a name="TerminateInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateInput"></a>

```csharp
public string TerminateInput { get; }
```

- *Type:* string

---

##### `TerminateTimeoutInSecondsInput`<sup>Optional</sup> <a name="TerminateTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSecondsInput"></a>

```csharp
public double TerminateTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `Resume`<sup>Required</sup> <a name="Resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume"></a>

```csharp
public string Resume { get; }
```

- *Type:* string

---

##### `ResumeTimeoutInSeconds`<sup>Required</sup> <a name="ResumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```csharp
public double ResumeTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run"></a>

```csharp
public string Run { get; }
```

- *Type:* string

---

##### `RunTimeoutInSeconds`<sup>Required</sup> <a name="RunTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```csharp
public double RunTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend"></a>

```csharp
public string Suspend { get; }
```

- *Type:* string

---

##### `SuspendTimeoutInSeconds`<sup>Required</sup> <a name="SuspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```csharp
public double SuspendTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Terminate`<sup>Required</sup> <a name="Terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate"></a>

```csharp
public string Terminate { get; }
```

- *Type:* string

---

##### `TerminateTimeoutInSeconds`<sup>Required</sup> <a name="TerminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```csharp
public double TerminateTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageHooksMicrovmHooks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---


### LambdaMicrovmImageHooksMicrovmImageHooksOutputReference <a name="LambdaMicrovmImageHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageHooksMicrovmImageHooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReady">ResetReady</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReadyTimeoutInSeconds">ResetReadyTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidate">ResetValidate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidateTimeoutInSeconds">ResetValidateTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReady` <a name="ResetReady" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReady"></a>

```csharp
private void ResetReady()
```

##### `ResetReadyTimeoutInSeconds` <a name="ResetReadyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReadyTimeoutInSeconds"></a>

```csharp
private void ResetReadyTimeoutInSeconds()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidate"></a>

```csharp
private void ResetValidate()
```

##### `ResetValidateTimeoutInSeconds` <a name="ResetValidateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidateTimeoutInSeconds"></a>

```csharp
private void ResetValidateTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyInput">ReadyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSecondsInput">ReadyTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateInput">ValidateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSecondsInput">ValidateTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready">Ready</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">ReadyTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate">Validate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">ValidateTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadyInput`<sup>Optional</sup> <a name="ReadyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyInput"></a>

```csharp
public string ReadyInput { get; }
```

- *Type:* string

---

##### `ReadyTimeoutInSecondsInput`<sup>Optional</sup> <a name="ReadyTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSecondsInput"></a>

```csharp
public double ReadyTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateInput"></a>

```csharp
public string ValidateInput { get; }
```

- *Type:* string

---

##### `ValidateTimeoutInSecondsInput`<sup>Optional</sup> <a name="ValidateTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSecondsInput"></a>

```csharp
public double ValidateTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready"></a>

```csharp
public string Ready { get; }
```

- *Type:* string

---

##### `ReadyTimeoutInSeconds`<sup>Required</sup> <a name="ReadyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```csharp
public double ReadyTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate"></a>

```csharp
public string Validate { get; }
```

- *Type:* string

---

##### `ValidateTimeoutInSeconds`<sup>Required</sup> <a name="ValidateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```csharp
public double ValidateTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageHooksMicrovmImageHooks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---


### LambdaMicrovmImageHooksOutputReference <a name="LambdaMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageHooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks">PutMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks">PutMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmHooks">ResetMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmImageHooks">ResetMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMicrovmHooks` <a name="PutMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks"></a>

```csharp
private void PutMicrovmHooks(LambdaMicrovmImageHooksMicrovmHooks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---

##### `PutMicrovmImageHooks` <a name="PutMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks"></a>

```csharp
private void PutMicrovmImageHooks(LambdaMicrovmImageHooksMicrovmImageHooks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---

##### `ResetMicrovmHooks` <a name="ResetMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmHooks"></a>

```csharp
private void ResetMicrovmHooks()
```

##### `ResetMicrovmImageHooks` <a name="ResetMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmImageHooks"></a>

```csharp
private void ResetMicrovmImageHooks()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooks">MicrovmHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference">LambdaMicrovmImageHooksMicrovmHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooks">MicrovmImageHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooksInput">MicrovmHooksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooksInput">MicrovmImageHooksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MicrovmHooks`<sup>Required</sup> <a name="MicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooks"></a>

```csharp
public LambdaMicrovmImageHooksMicrovmHooksOutputReference MicrovmHooks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference">LambdaMicrovmImageHooksMicrovmHooksOutputReference</a>

---

##### `MicrovmImageHooks`<sup>Required</sup> <a name="MicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooks"></a>

```csharp
public LambdaMicrovmImageHooksMicrovmImageHooksOutputReference MicrovmImageHooks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a>

---

##### `MicrovmHooksInput`<sup>Optional</sup> <a name="MicrovmHooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooksInput"></a>

```csharp
public IResolvable|LambdaMicrovmImageHooksMicrovmHooks MicrovmHooksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---

##### `MicrovmImageHooksInput`<sup>Optional</sup> <a name="MicrovmImageHooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooksInput"></a>

```csharp
public IResolvable|LambdaMicrovmImageHooksMicrovmImageHooks MicrovmImageHooksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageHooks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---


### LambdaMicrovmImageLoggingCloudwatchOutputReference <a name="LambdaMicrovmImageLoggingCloudwatchOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageLoggingCloudwatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogStream">ResetLogStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```

##### `ResetLogStream` <a name="ResetLogStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogStream"></a>

```csharp
private void ResetLogStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStreamInput">LogStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream">LogStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `LogStreamInput`<sup>Optional</sup> <a name="LogStreamInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStreamInput"></a>

```csharp
public string LogStreamInput { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `LogStream`<sup>Required</sup> <a name="LogStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream"></a>

```csharp
public string LogStream { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageLoggingCloudwatch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---


### LambdaMicrovmImageLoggingOutputReference <a name="LambdaMicrovmImageLoggingOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch">PutCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetCloudwatch">ResetCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatch` <a name="PutCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch"></a>

```csharp
private void PutCloudwatch(LambdaMicrovmImageLoggingCloudwatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---

##### `ResetCloudwatch` <a name="ResetCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetCloudwatch"></a>

```csharp
private void ResetCloudwatch()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference">LambdaMicrovmImageLoggingCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatchInput">CloudwatchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatch"></a>

```csharp
public LambdaMicrovmImageLoggingCloudwatchOutputReference Cloudwatch { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference">LambdaMicrovmImageLoggingCloudwatchOutputReference</a>

---

##### `CloudwatchInput`<sup>Optional</sup> <a name="CloudwatchInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatchInput"></a>

```csharp
public IResolvable|LambdaMicrovmImageLoggingCloudwatch CloudwatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageLogging InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---


### LambdaMicrovmImageResourcesList <a name="LambdaMicrovmImageResourcesList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get"></a>

```csharp
private LambdaMicrovmImageResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]

---


### LambdaMicrovmImageResourcesOutputReference <a name="LambdaMicrovmImageResourcesOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiBInput">MinimumMemoryInMiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB">MinimumMemoryInMiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumMemoryInMiBInput`<sup>Optional</sup> <a name="MinimumMemoryInMiBInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiBInput"></a>

```csharp
public double MinimumMemoryInMiBInput { get; }
```

- *Type:* double

---

##### `MinimumMemoryInMiB`<sup>Required</sup> <a name="MinimumMemoryInMiB" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB"></a>

```csharp
public double MinimumMemoryInMiB { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>

---


### LambdaMicrovmImageTagsList <a name="LambdaMicrovmImageTagsList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get"></a>

```csharp
private LambdaMicrovmImageTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]

---


### LambdaMicrovmImageTagsOutputReference <a name="LambdaMicrovmImageTagsOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaMicrovmImageTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaMicrovmImageTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>

---



