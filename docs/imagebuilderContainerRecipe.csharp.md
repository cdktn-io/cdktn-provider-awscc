# `imagebuilderContainerRecipe` Submodule <a name="`imagebuilderContainerRecipe` Submodule" id="@cdktn/provider-awscc.imagebuilderContainerRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderContainerRecipe <a name="ImagebuilderContainerRecipe" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe awscc_imagebuilder_container_recipe}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipe(Construct Scope, string Id, ImagebuilderContainerRecipeConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig">ImagebuilderContainerRecipeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig">ImagebuilderContainerRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponents">PutComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration">PutInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository">PutTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetComponents">ResetComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetContainerType">ResetContainerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateData">ResetDockerfileTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateUri">ResetDockerfileTemplateUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetImageOsVersionOverride">ResetImageOsVersionOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetInstanceConfiguration">ResetInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetParentImage">ResetParentImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetPlatformOverride">ResetPlatformOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTargetRepository">ResetTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponents` <a name="PutComponents" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponents"></a>

```csharp
private void PutComponents(IResolvable|ImagebuilderContainerRecipeComponents[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponents.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]

---

##### `PutInstanceConfiguration` <a name="PutInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration"></a>

```csharp
private void PutInstanceConfiguration(ImagebuilderContainerRecipeInstanceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---

##### `PutTargetRepository` <a name="PutTargetRepository" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository"></a>

```csharp
private void PutTargetRepository(ImagebuilderContainerRecipeTargetRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---

##### `ResetComponents` <a name="ResetComponents" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetComponents"></a>

```csharp
private void ResetComponents()
```

##### `ResetContainerType` <a name="ResetContainerType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetContainerType"></a>

```csharp
private void ResetContainerType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDockerfileTemplateData` <a name="ResetDockerfileTemplateData" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateData"></a>

```csharp
private void ResetDockerfileTemplateData()
```

##### `ResetDockerfileTemplateUri` <a name="ResetDockerfileTemplateUri" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateUri"></a>

```csharp
private void ResetDockerfileTemplateUri()
```

##### `ResetImageOsVersionOverride` <a name="ResetImageOsVersionOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetImageOsVersionOverride"></a>

```csharp
private void ResetImageOsVersionOverride()
```

##### `ResetInstanceConfiguration` <a name="ResetInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetInstanceConfiguration"></a>

```csharp
private void ResetInstanceConfiguration()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParentImage` <a name="ResetParentImage" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetParentImage"></a>

```csharp
private void ResetParentImage()
```

##### `ResetPlatformOverride` <a name="ResetPlatformOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetPlatformOverride"></a>

```csharp
private void ResetPlatformOverride()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetRepository` <a name="ResetTargetRepository" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTargetRepository"></a>

```csharp
private void ResetTargetRepository()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderContainerRecipe resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderContainerRecipe.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderContainerRecipe.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderContainerRecipe.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderContainerRecipe.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ImagebuilderContainerRecipe resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderContainerRecipe to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderContainerRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderContainerRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.components">Components</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList">ImagebuilderContainerRecipeComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference">ImagebuilderContainerRecipeInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.latestVersion">LatestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference">ImagebuilderContainerRecipeLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference">ImagebuilderContainerRecipeTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.componentsInput">ComponentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerTypeInput">ContainerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateDataInput">DockerfileTemplateDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUriInput">DockerfileTemplateUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.imageOsVersionOverrideInput">ImageOsVersionOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfigurationInput">InstanceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImageInput">ParentImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverrideInput">PlatformOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepositoryInput">TargetRepositoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerType">ContainerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateData">DockerfileTemplateData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUri">DockerfileTemplateUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.imageOsVersionOverride">ImageOsVersionOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImage">ParentImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverride">PlatformOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.components"></a>

```csharp
public ImagebuilderContainerRecipeComponentsList Components { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList">ImagebuilderContainerRecipeComponentsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceConfiguration`<sup>Required</sup> <a name="InstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfiguration"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfigurationOutputReference InstanceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference">ImagebuilderContainerRecipeInstanceConfigurationOutputReference</a>

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.latestVersion"></a>

```csharp
public ImagebuilderContainerRecipeLatestVersionOutputReference LatestVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference">ImagebuilderContainerRecipeLatestVersionOutputReference</a>

---

##### `TargetRepository`<sup>Required</sup> <a name="TargetRepository" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepository"></a>

```csharp
public ImagebuilderContainerRecipeTargetRepositoryOutputReference TargetRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference">ImagebuilderContainerRecipeTargetRepositoryOutputReference</a>

---

##### `ComponentsInput`<sup>Optional</sup> <a name="ComponentsInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.componentsInput"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeComponents[] ComponentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]

---

##### `ContainerTypeInput`<sup>Optional</sup> <a name="ContainerTypeInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerTypeInput"></a>

```csharp
public string ContainerTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DockerfileTemplateDataInput`<sup>Optional</sup> <a name="DockerfileTemplateDataInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateDataInput"></a>

```csharp
public string DockerfileTemplateDataInput { get; }
```

- *Type:* string

---

##### `DockerfileTemplateUriInput`<sup>Optional</sup> <a name="DockerfileTemplateUriInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUriInput"></a>

```csharp
public string DockerfileTemplateUriInput { get; }
```

- *Type:* string

---

##### `ImageOsVersionOverrideInput`<sup>Optional</sup> <a name="ImageOsVersionOverrideInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.imageOsVersionOverrideInput"></a>

```csharp
public string ImageOsVersionOverrideInput { get; }
```

- *Type:* string

---

##### `InstanceConfigurationInput`<sup>Optional</sup> <a name="InstanceConfigurationInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfigurationInput"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeInstanceConfiguration InstanceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentImageInput`<sup>Optional</sup> <a name="ParentImageInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImageInput"></a>

```csharp
public string ParentImageInput { get; }
```

- *Type:* string

---

##### `PlatformOverrideInput`<sup>Optional</sup> <a name="PlatformOverrideInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverrideInput"></a>

```csharp
public string PlatformOverrideInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetRepositoryInput`<sup>Optional</sup> <a name="TargetRepositoryInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepositoryInput"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeTargetRepository TargetRepositoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerType"></a>

```csharp
public string ContainerType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DockerfileTemplateData`<sup>Required</sup> <a name="DockerfileTemplateData" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateData"></a>

```csharp
public string DockerfileTemplateData { get; }
```

- *Type:* string

---

##### `DockerfileTemplateUri`<sup>Required</sup> <a name="DockerfileTemplateUri" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUri"></a>

```csharp
public string DockerfileTemplateUri { get; }
```

- *Type:* string

---

##### `ImageOsVersionOverride`<sup>Required</sup> <a name="ImageOsVersionOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.imageOsVersionOverride"></a>

```csharp
public string ImageOsVersionOverride { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentImage`<sup>Required</sup> <a name="ParentImage" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImage"></a>

```csharp
public string ParentImage { get; }
```

- *Type:* string

---

##### `PlatformOverride`<sup>Required</sup> <a name="PlatformOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverride"></a>

```csharp
public string PlatformOverride { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderContainerRecipeComponents <a name="ImagebuilderContainerRecipeComponents" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeComponents {
    string ComponentArn = null,
    IResolvable|ImagebuilderContainerRecipeComponentsParameters[] Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents.property.componentArn">ComponentArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]</code> | A group of parameter settings that are used to configure the component for a specific recipe. |

---

##### `ComponentArn`<sup>Optional</sup> <a name="ComponentArn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents.property.componentArn"></a>

```csharp
public string ComponentArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#component_arn ImagebuilderContainerRecipe#component_arn}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents.property.parameters"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeComponentsParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]

A group of parameter settings that are used to configure the component for a specific recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#parameters ImagebuilderContainerRecipe#parameters}

---

### ImagebuilderContainerRecipeComponentsParameters <a name="ImagebuilderContainerRecipeComponentsParameters" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeComponentsParameters {
    string Name = null,
    string[] Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters.property.name">Name</a></code> | <code>string</code> | The name of the component parameter to set. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters.property.value">Value</a></code> | <code>string[]</code> | Sets the value for the named component parameter. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the component parameter to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters.property.value"></a>

```csharp
public string[] Value { get; set; }
```

- *Type:* string[]

Sets the value for the named component parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#value ImagebuilderContainerRecipe#value}

---

### ImagebuilderContainerRecipeConfig <a name="ImagebuilderContainerRecipeConfig" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ImagebuilderContainerRecipeComponents[] Components = null,
    string ContainerType = null,
    string Description = null,
    string DockerfileTemplateData = null,
    string DockerfileTemplateUri = null,
    string ImageOsVersionOverride = null,
    ImagebuilderContainerRecipeInstanceConfiguration InstanceConfiguration = null,
    string KmsKeyId = null,
    string Name = null,
    string ParentImage = null,
    string PlatformOverride = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ImagebuilderContainerRecipeTargetRepository TargetRepository = null,
    string Version = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.components">Components</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]</code> | Components for build and test that are included in the container recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.containerType">ContainerType</a></code> | <code>string</code> | Specifies the type of container, such as Docker. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.description">Description</a></code> | <code>string</code> | The description of the container recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateData">DockerfileTemplateData</a></code> | <code>string</code> | Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateUri">DockerfileTemplateUri</a></code> | <code>string</code> | The S3 URI for the Dockerfile that will be used to build your container image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.imageOsVersionOverride">ImageOsVersionOverride</a></code> | <code>string</code> | Specifies the operating system version for the source image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | A group of options that can be used to configure an instance for building and testing container images. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Identifies which KMS key is used to encrypt the container image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.name">Name</a></code> | <code>string</code> | The name of the container recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.parentImage">ParentImage</a></code> | <code>string</code> | The source image for the container recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.platformOverride">PlatformOverride</a></code> | <code>string</code> | Specifies the operating system platform when you use a custom source image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Tags that are attached to the container recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | The destination repository for the container image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.version">Version</a></code> | <code>string</code> | The semantic version of the container recipe (<major>.<minor>.<patch>). |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | The working directory to be used during build and test workflows. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Components`<sup>Optional</sup> <a name="Components" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.components"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeComponents[] Components { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]

Components for build and test that are included in the container recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#components ImagebuilderContainerRecipe#components}

---

##### `ContainerType`<sup>Optional</sup> <a name="ContainerType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.containerType"></a>

```csharp
public string ContainerType { get; set; }
```

- *Type:* string

Specifies the type of container, such as Docker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the container recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}

---

##### `DockerfileTemplateData`<sup>Optional</sup> <a name="DockerfileTemplateData" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateData"></a>

```csharp
public string DockerfileTemplateData { get; set; }
```

- *Type:* string

Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside.

The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}

---

##### `DockerfileTemplateUri`<sup>Optional</sup> <a name="DockerfileTemplateUri" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateUri"></a>

```csharp
public string DockerfileTemplateUri { get; set; }
```

- *Type:* string

The S3 URI for the Dockerfile that will be used to build your container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}

---

##### `ImageOsVersionOverride`<sup>Optional</sup> <a name="ImageOsVersionOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.imageOsVersionOverride"></a>

```csharp
public string ImageOsVersionOverride { get; set; }
```

- *Type:* string

Specifies the operating system version for the source image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#image_os_version_override ImagebuilderContainerRecipe#image_os_version_override}

---

##### `InstanceConfiguration`<sup>Optional</sup> <a name="InstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.instanceConfiguration"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfiguration InstanceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

A group of options that can be used to configure an instance for building and testing container images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#instance_configuration ImagebuilderContainerRecipe#instance_configuration}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Identifies which KMS key is used to encrypt the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the container recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}

---

##### `ParentImage`<sup>Optional</sup> <a name="ParentImage" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.parentImage"></a>

```csharp
public string ParentImage { get; set; }
```

- *Type:* string

The source image for the container recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}

---

##### `PlatformOverride`<sup>Optional</sup> <a name="PlatformOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.platformOverride"></a>

```csharp
public string PlatformOverride { get; set; }
```

- *Type:* string

Specifies the operating system platform when you use a custom source image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#platform_override ImagebuilderContainerRecipe#platform_override}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Tags that are attached to the container recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}

---

##### `TargetRepository`<sup>Optional</sup> <a name="TargetRepository" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.targetRepository"></a>

```csharp
public ImagebuilderContainerRecipeTargetRepository TargetRepository { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

The destination repository for the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#target_repository ImagebuilderContainerRecipe#target_repository}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The semantic version of the container recipe (<major>.<minor>.<patch>).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

The working directory to be used during build and test workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}

---

### ImagebuilderContainerRecipeInstanceConfiguration <a name="ImagebuilderContainerRecipeInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeInstanceConfiguration {
    IResolvable|ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings[] BlockDeviceMappings = null,
    string Image = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]</code> | Defines the block devices to attach for building an instance from this Image Builder AMI. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.image">Image</a></code> | <code>string</code> | The AMI ID to use as the base image for a container build and test instance. |

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.blockDeviceMappings"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings[] BlockDeviceMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]

Defines the block devices to attach for building an instance from this Image Builder AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#block_device_mappings ImagebuilderContainerRecipe#block_device_mappings}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

The AMI ID to use as the base image for a container build and test instance.

If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#image ImagebuilderContainerRecipe#image}

---

### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings {
    string DeviceName = null,
    ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs Ebs = null,
    string NoDevice = null,
    string VirtualName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>string</code> | The device to which these mappings apply. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a></code> | Use to manage Amazon EBS-specific configuration for this mapping. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>string</code> | Use to remove a mapping from the parent image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>string</code> | Use to manage instance ephemeral devices. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

The device to which these mappings apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#device_name ImagebuilderContainerRecipe#device_name}

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.ebs"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a>

Use to manage Amazon EBS-specific configuration for this mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#ebs ImagebuilderContainerRecipe#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.noDevice"></a>

```csharp
public string NoDevice { get; set; }
```

- *Type:* string

Use to remove a mapping from the parent image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#no_device ImagebuilderContainerRecipe#no_device}

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

Use to manage instance ephemeral devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#virtual_name ImagebuilderContainerRecipe#virtual_name}

---

### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs {
    bool|IResolvable DeleteOnTermination = null,
    bool|IResolvable Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    string SnapshotId = null,
    double Throughput = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use to configure delete on termination of the associated device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use to configure device encryption. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>double</code> | Use to configure device IOPS. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Use to configure the KMS key to use when encrypting the device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | The snapshot that defines the device contents. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>double</code> | For GP3 volumes only - The throughput in MiB/s that the volume supports. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Use to override the device's volume size. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | Use to override the device's volume type. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use to configure delete on termination of the associated device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use to configure device encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#encrypted ImagebuilderContainerRecipe#encrypted}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Use to configure device IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#iops ImagebuilderContainerRecipe#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Use to configure the KMS key to use when encrypting the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

The snapshot that defines the device contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#snapshot_id ImagebuilderContainerRecipe#snapshot_id}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

For GP3 volumes only - The throughput in MiB/s that the volume supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#throughput ImagebuilderContainerRecipe#throughput}

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Use to override the device's volume size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#volume_size ImagebuilderContainerRecipe#volume_size}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Use to override the device's volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#volume_type ImagebuilderContainerRecipe#volume_type}

---

### ImagebuilderContainerRecipeLatestVersion <a name="ImagebuilderContainerRecipeLatestVersion" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeLatestVersion {

};
```


### ImagebuilderContainerRecipeTargetRepository <a name="ImagebuilderContainerRecipeTargetRepository" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeTargetRepository {
    string RepositoryName = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.repositoryName">RepositoryName</a></code> | <code>string</code> | The name of the container repository where the output container image is stored. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.service">Service</a></code> | <code>string</code> | Specifies the service in which this image was registered. |

---

##### `RepositoryName`<sup>Optional</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

The name of the container repository where the output container image is stored.

This name is prefixed by the repository location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#repository_name ImagebuilderContainerRecipe#repository_name}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Specifies the service in which this image was registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#service ImagebuilderContainerRecipe#service}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderContainerRecipeComponentsList <a name="ImagebuilderContainerRecipeComponentsList" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeComponentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.get"></a>

```csharp
private ImagebuilderContainerRecipeComponentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeComponents[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]

---


### ImagebuilderContainerRecipeComponentsOutputReference <a name="ImagebuilderContainerRecipeComponentsOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resetComponentArn">ResetComponentArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|ImagebuilderContainerRecipeComponentsParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]

---

##### `ResetComponentArn` <a name="ResetComponentArn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resetComponentArn"></a>

```csharp
private void ResetComponentArn()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList">ImagebuilderContainerRecipeComponentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.componentArnInput">ComponentArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.componentArn">ComponentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.parameters"></a>

```csharp
public ImagebuilderContainerRecipeComponentsParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList">ImagebuilderContainerRecipeComponentsParametersList</a>

---

##### `ComponentArnInput`<sup>Optional</sup> <a name="ComponentArnInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.componentArnInput"></a>

```csharp
public string ComponentArnInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeComponentsParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]

---

##### `ComponentArn`<sup>Required</sup> <a name="ComponentArn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.componentArn"></a>

```csharp
public string ComponentArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeComponents InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>

---


### ImagebuilderContainerRecipeComponentsParametersList <a name="ImagebuilderContainerRecipeComponentsParametersList" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeComponentsParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.get"></a>

```csharp
private ImagebuilderContainerRecipeComponentsParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeComponentsParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]

---


### ImagebuilderContainerRecipeComponentsParametersOutputReference <a name="ImagebuilderContainerRecipeComponentsParametersOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeComponentsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.value">Value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.valueInput"></a>

```csharp
public string[] ValueInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.value"></a>

```csharp
public string[] Value { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeComponentsParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public bool|IResolvable DeleteOnTerminationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```csharp
public bool|IResolvable EncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a>

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.get"></a>

```csharp
private ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.putEbs"></a>

```csharp
private void PutEbs(ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```csharp
private void ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```csharp
private void ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.ebs"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs EbsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```csharp
public string NoDeviceInput { get; }
```

- *Type:* string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.noDevice"></a>

```csharp
public string NoDevice { get; }
```

- *Type:* string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>

---


### ImagebuilderContainerRecipeInstanceConfigurationOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeInstanceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMappings"></a>

```csharp
private void PutBlockDeviceMappings(IResolvable|ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]

---

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetBlockDeviceMappings"></a>

```csharp
private void ResetBlockDeviceMappings()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappings"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList BlockDeviceMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList</a>

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappingsInput"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings[] BlockDeviceMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeInstanceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---


### ImagebuilderContainerRecipeLatestVersionOutputReference <a name="ImagebuilderContainerRecipeLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeLatestVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.major">Major</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.minor">Minor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.patch">Patch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersion">ImagebuilderContainerRecipeLatestVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Major`<sup>Required</sup> <a name="Major" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.major"></a>

```csharp
public string Major { get; }
```

- *Type:* string

---

##### `Minor`<sup>Required</sup> <a name="Minor" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.minor"></a>

```csharp
public string Minor { get; }
```

- *Type:* string

---

##### `Patch`<sup>Required</sup> <a name="Patch" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.patch"></a>

```csharp
public string Patch { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderContainerRecipeLatestVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersion">ImagebuilderContainerRecipeLatestVersion</a>

---


### ImagebuilderContainerRecipeTargetRepositoryOutputReference <a name="ImagebuilderContainerRecipeTargetRepositoryOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderContainerRecipeTargetRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resetRepositoryName">ResetRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepositoryName` <a name="ResetRepositoryName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resetRepositoryName"></a>

```csharp
private void ResetRepositoryName()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderContainerRecipeTargetRepository InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---



