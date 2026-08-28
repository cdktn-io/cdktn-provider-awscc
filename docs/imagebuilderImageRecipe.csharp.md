# `imagebuilderImageRecipe` Submodule <a name="`imagebuilderImageRecipe` Submodule" id="@cdktn/provider-awscc.imagebuilderImageRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImageRecipe <a name="ImagebuilderImageRecipe" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe awscc_imagebuilder_image_recipe}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipe(Construct Scope, string Id, ImagebuilderImageRecipeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig">ImagebuilderImageRecipeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig">ImagebuilderImageRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration">PutAdditionalInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents">PutComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAdditionalInstanceConfiguration">ResetAdditionalInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiTags">ResetAmiTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiWatermarks">ResetAmiWatermarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetComponents">ResetComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalInstanceConfiguration` <a name="PutAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration"></a>

```csharp
private void PutAdditionalInstanceConfiguration(ImagebuilderImageRecipeAdditionalInstanceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings"></a>

```csharp
private void PutBlockDeviceMappings(IResolvable|ImagebuilderImageRecipeBlockDeviceMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]

---

##### `PutComponents` <a name="PutComponents" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents"></a>

```csharp
private void PutComponents(IResolvable|ImagebuilderImageRecipeComponents[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]

---

##### `ResetAdditionalInstanceConfiguration` <a name="ResetAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAdditionalInstanceConfiguration"></a>

```csharp
private void ResetAdditionalInstanceConfiguration()
```

##### `ResetAmiTags` <a name="ResetAmiTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiTags"></a>

```csharp
private void ResetAmiTags()
```

##### `ResetAmiWatermarks` <a name="ResetAmiWatermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiWatermarks"></a>

```csharp
private void ResetAmiWatermarks()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMappings"></a>

```csharp
private void ResetBlockDeviceMappings()
```

##### `ResetComponents` <a name="ResetComponents" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetComponents"></a>

```csharp
private void ResetComponents()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderImageRecipe.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderImageRecipe.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderImageRecipe.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderImageRecipe.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderImageRecipe to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderImageRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderImageRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfiguration">AdditionalInstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList">ImagebuilderImageRecipeBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.components">Components</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList">ImagebuilderImageRecipeComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.latestVersion">LatestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference">ImagebuilderImageRecipeLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfigurationInput">AdditionalInstanceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTagsInput">AmiTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarksInput">AmiWatermarksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentsInput">ComponentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput">ParentImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTags">AmiTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarks">AmiWatermarks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage">ParentImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalInstanceConfiguration`<sup>Required</sup> <a name="AdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfiguration"></a>

```csharp
public ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference AdditionalInstanceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappings"></a>

```csharp
public ImagebuilderImageRecipeBlockDeviceMappingsList BlockDeviceMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList">ImagebuilderImageRecipeBlockDeviceMappingsList</a>

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.components"></a>

```csharp
public ImagebuilderImageRecipeComponentsList Components { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList">ImagebuilderImageRecipeComponentsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.latestVersion"></a>

```csharp
public ImagebuilderImageRecipeLatestVersionOutputReference LatestVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference">ImagebuilderImageRecipeLatestVersionOutputReference</a>

---

##### `AdditionalInstanceConfigurationInput`<sup>Optional</sup> <a name="AdditionalInstanceConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfigurationInput"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeAdditionalInstanceConfiguration AdditionalInstanceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---

##### `AmiTagsInput`<sup>Optional</sup> <a name="AmiTagsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AmiTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AmiWatermarksInput`<sup>Optional</sup> <a name="AmiWatermarksInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarksInput"></a>

```csharp
public string[] AmiWatermarksInput { get; }
```

- *Type:* string[]

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingsInput"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeBlockDeviceMappings[] BlockDeviceMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]

---

##### `ComponentsInput`<sup>Optional</sup> <a name="ComponentsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentsInput"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeComponents[] ComponentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentImageInput`<sup>Optional</sup> <a name="ParentImageInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput"></a>

```csharp
public string ParentImageInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `AmiTags`<sup>Required</sup> <a name="AmiTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AmiTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AmiWatermarks`<sup>Required</sup> <a name="AmiWatermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarks"></a>

```csharp
public string[] AmiWatermarks { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentImage`<sup>Required</sup> <a name="ParentImage" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage"></a>

```csharp
public string ParentImage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageRecipeAdditionalInstanceConfiguration <a name="ImagebuilderImageRecipeAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeAdditionalInstanceConfiguration {
    ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent SystemsManagerAgent = null,
    string UserDataOverride = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.systemsManagerAgent">SystemsManagerAgent</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | Contains settings for the SSM agent on your build instance. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.userDataOverride">UserDataOverride</a></code> | <code>string</code> | Use this property to provide commands or a command script to run when you launch your build instance. |

---

##### `SystemsManagerAgent`<sup>Optional</sup> <a name="SystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.systemsManagerAgent"></a>

```csharp
public ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent SystemsManagerAgent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

Contains settings for the SSM agent on your build instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}

---

##### `UserDataOverride`<sup>Optional</sup> <a name="UserDataOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.userDataOverride"></a>

```csharp
public string UserDataOverride { get; set; }
```

- *Type:* string

Use this property to provide commands or a command script to run when you launch your build instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#user_data_override ImagebuilderImageRecipe#user_data_override}

---

### ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent {
    bool|IResolvable UninstallAfterBuild = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.property.uninstallAfterBuild">UninstallAfterBuild</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI. |

---

##### `UninstallAfterBuild`<sup>Optional</sup> <a name="UninstallAfterBuild" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.property.uninstallAfterBuild"></a>

```csharp
public bool|IResolvable UninstallAfterBuild { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI.

If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}

---

### ImagebuilderImageRecipeBlockDeviceMappings <a name="ImagebuilderImageRecipeBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeBlockDeviceMappings {
    string DeviceName = null,
    ImagebuilderImageRecipeBlockDeviceMappingsEbs Ebs = null,
    string NoDevice = null,
    string VirtualName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>string</code> | The device to which these mappings apply. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | Use to manage Amazon EBS-specific configuration for this mapping. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>string</code> | Use to remove a mapping from the parent image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>string</code> | Use to manage instance ephemeral devices. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

The device to which these mappings apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#device_name ImagebuilderImageRecipe#device_name}

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.ebs"></a>

```csharp
public ImagebuilderImageRecipeBlockDeviceMappingsEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

Use to manage Amazon EBS-specific configuration for this mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ebs ImagebuilderImageRecipe#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.noDevice"></a>

```csharp
public string NoDevice { get; set; }
```

- *Type:* string

Use to remove a mapping from the parent image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#no_device ImagebuilderImageRecipe#no_device}

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

Use to manage instance ephemeral devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#virtual_name ImagebuilderImageRecipe#virtual_name}

---

### ImagebuilderImageRecipeBlockDeviceMappingsEbs <a name="ImagebuilderImageRecipeBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeBlockDeviceMappingsEbs {
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
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use to configure delete on termination of the associated device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use to configure device encryption. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>double</code> | Use to configure device IOPS. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Use to configure the KMS key to use when encrypting the device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | The snapshot that defines the device contents. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>double</code> | For GP3 volumes only - The throughput in MiB/s that the volume supports. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Use to override the device's volume size. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | Use to override the device's volume type. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use to configure delete on termination of the associated device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use to configure device encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Use to configure device IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Use to configure the KMS key to use when encrypting the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

The snapshot that defines the device contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

For GP3 volumes only - The throughput in MiB/s that the volume supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Use to override the device's volume size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Use to override the device's volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}

---

### ImagebuilderImageRecipeComponents <a name="ImagebuilderImageRecipeComponents" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeComponents {
    string ComponentArn = null,
    IResolvable|ImagebuilderImageRecipeComponentsParameters[] Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.componentArn">ComponentArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]</code> | A group of parameter settings that are used to configure the component for a specific recipe. |

---

##### `ComponentArn`<sup>Optional</sup> <a name="ComponentArn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.componentArn"></a>

```csharp
public string ComponentArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#component_arn ImagebuilderImageRecipe#component_arn}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.parameters"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeComponentsParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]

A group of parameter settings that are used to configure the component for a specific recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#parameters ImagebuilderImageRecipe#parameters}

---

### ImagebuilderImageRecipeComponentsParameters <a name="ImagebuilderImageRecipeComponentsParameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeComponentsParameters {
    string Name = null,
    string[] Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.name">Name</a></code> | <code>string</code> | The name of the component parameter to set. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.value">Value</a></code> | <code>string[]</code> | Sets the value for the named component parameter. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the component parameter to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.value"></a>

```csharp
public string[] Value { get; set; }
```

- *Type:* string[]

Sets the value for the named component parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#value ImagebuilderImageRecipe#value}

---

### ImagebuilderImageRecipeConfig <a name="ImagebuilderImageRecipeConfig" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ParentImage,
    string Version,
    ImagebuilderImageRecipeAdditionalInstanceConfiguration AdditionalInstanceConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> AmiTags = null,
    string[] AmiWatermarks = null,
    IResolvable|ImagebuilderImageRecipeBlockDeviceMappings[] BlockDeviceMappings = null,
    IResolvable|ImagebuilderImageRecipeComponents[] Components = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name">Name</a></code> | <code>string</code> | The name of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage">ParentImage</a></code> | <code>string</code> | The parent image of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version">Version</a></code> | <code>string</code> | The version of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.additionalInstanceConfiguration">AdditionalInstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | Specify additional settings and launch scripts for your build instances. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiTags">AmiTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags to apply to the AMI created by this image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiWatermarks">AmiWatermarks</a></code> | <code>string[]</code> | The AMI watermark names to attach to the output AMI from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]</code> | The block device mappings to apply when creating images from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.components">Components</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]</code> | The components of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description">Description</a></code> | <code>string</code> | The description of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | The working directory to be used during build and test workflows. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}

---

##### `ParentImage`<sup>Required</sup> <a name="ParentImage" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage"></a>

```csharp
public string ParentImage { get; set; }
```

- *Type:* string

The parent image of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}

---

##### `AdditionalInstanceConfiguration`<sup>Optional</sup> <a name="AdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.additionalInstanceConfiguration"></a>

```csharp
public ImagebuilderImageRecipeAdditionalInstanceConfiguration AdditionalInstanceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

Specify additional settings and launch scripts for your build instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#additional_instance_configuration ImagebuilderImageRecipe#additional_instance_configuration}

---

##### `AmiTags`<sup>Optional</sup> <a name="AmiTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AmiTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags to apply to the AMI created by this image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ami_tags ImagebuilderImageRecipe#ami_tags}

---

##### `AmiWatermarks`<sup>Optional</sup> <a name="AmiWatermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiWatermarks"></a>

```csharp
public string[] AmiWatermarks { get; set; }
```

- *Type:* string[]

The AMI watermark names to attach to the output AMI from this recipe.

AMI watermarks are lineage markers that automatically propagate to derivative AMIs when the source AMI is copied or distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ami_watermarks ImagebuilderImageRecipe#ami_watermarks}

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMappings"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeBlockDeviceMappings[] BlockDeviceMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]

The block device mappings to apply when creating images from this recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#block_device_mappings ImagebuilderImageRecipe#block_device_mappings}

---

##### `Components`<sup>Optional</sup> <a name="Components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.components"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeComponents[] Components { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]

The components of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#components ImagebuilderImageRecipe#components}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

The working directory to be used during build and test workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}

---

### ImagebuilderImageRecipeLatestVersion <a name="ImagebuilderImageRecipeLatestVersion" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeLatestVersion {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent">PutSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetSystemsManagerAgent">ResetSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetUserDataOverride">ResetUserDataOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSystemsManagerAgent` <a name="PutSystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent"></a>

```csharp
private void PutSystemsManagerAgent(ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---

##### `ResetSystemsManagerAgent` <a name="ResetSystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetSystemsManagerAgent"></a>

```csharp
private void ResetSystemsManagerAgent()
```

##### `ResetUserDataOverride` <a name="ResetUserDataOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetUserDataOverride"></a>

```csharp
private void ResetUserDataOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgent">SystemsManagerAgent</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgentInput">SystemsManagerAgentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverrideInput">UserDataOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverride">UserDataOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemsManagerAgent`<sup>Required</sup> <a name="SystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgent"></a>

```csharp
public ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference SystemsManagerAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference</a>

---

##### `SystemsManagerAgentInput`<sup>Optional</sup> <a name="SystemsManagerAgentInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgentInput"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent SystemsManagerAgentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---

##### `UserDataOverrideInput`<sup>Optional</sup> <a name="UserDataOverrideInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverrideInput"></a>

```csharp
public string UserDataOverrideInput { get; }
```

- *Type:* string

---

##### `UserDataOverride`<sup>Required</sup> <a name="UserDataOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverride"></a>

```csharp
public string UserDataOverride { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeAdditionalInstanceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---


### ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resetUninstallAfterBuild">ResetUninstallAfterBuild</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUninstallAfterBuild` <a name="ResetUninstallAfterBuild" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resetUninstallAfterBuild"></a>

```csharp
private void ResetUninstallAfterBuild()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput">UninstallAfterBuildInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuild">UninstallAfterBuild</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UninstallAfterBuildInput`<sup>Optional</sup> <a name="UninstallAfterBuildInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput"></a>

```csharp
public bool|IResolvable UninstallAfterBuildInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UninstallAfterBuild`<sup>Required</sup> <a name="UninstallAfterBuild" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuild"></a>

```csharp
public bool|IResolvable UninstallAfterBuild { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---


### ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public bool|IResolvable DeleteOnTerminationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```csharp
public bool|IResolvable EncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeBlockDeviceMappingsEbs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---


### ImagebuilderImageRecipeBlockDeviceMappingsList <a name="ImagebuilderImageRecipeBlockDeviceMappingsList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeBlockDeviceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get"></a>

```csharp
private ImagebuilderImageRecipeBlockDeviceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeBlockDeviceMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]

---


### ImagebuilderImageRecipeBlockDeviceMappingsOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeBlockDeviceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs"></a>

```csharp
private void PutEbs(ImagebuilderImageRecipeBlockDeviceMappingsEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```csharp
private void ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```csharp
private void ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebs"></a>

```csharp
public ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeBlockDeviceMappingsEbs EbsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```csharp
public string NoDeviceInput { get; }
```

- *Type:* string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDevice"></a>

```csharp
public string NoDevice { get; }
```

- *Type:* string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeBlockDeviceMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>

---


### ImagebuilderImageRecipeComponentsList <a name="ImagebuilderImageRecipeComponentsList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeComponentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get"></a>

```csharp
private ImagebuilderImageRecipeComponentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeComponents[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]

---


### ImagebuilderImageRecipeComponentsOutputReference <a name="ImagebuilderImageRecipeComponentsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetComponentArn">ResetComponentArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|ImagebuilderImageRecipeComponentsParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]

---

##### `ResetComponentArn` <a name="ResetComponentArn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetComponentArn"></a>

```csharp
private void ResetComponentArn()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList">ImagebuilderImageRecipeComponentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArnInput">ComponentArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArn">ComponentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parameters"></a>

```csharp
public ImagebuilderImageRecipeComponentsParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList">ImagebuilderImageRecipeComponentsParametersList</a>

---

##### `ComponentArnInput`<sup>Optional</sup> <a name="ComponentArnInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArnInput"></a>

```csharp
public string ComponentArnInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeComponentsParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]

---

##### `ComponentArn`<sup>Required</sup> <a name="ComponentArn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArn"></a>

```csharp
public string ComponentArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeComponents InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>

---


### ImagebuilderImageRecipeComponentsParametersList <a name="ImagebuilderImageRecipeComponentsParametersList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeComponentsParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get"></a>

```csharp
private ImagebuilderImageRecipeComponentsParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeComponentsParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]

---


### ImagebuilderImageRecipeComponentsParametersOutputReference <a name="ImagebuilderImageRecipeComponentsParametersOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeComponentsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.value">Value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.valueInput"></a>

```csharp
public string[] ValueInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.value"></a>

```csharp
public string[] Value { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageRecipeComponentsParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>

---


### ImagebuilderImageRecipeLatestVersionOutputReference <a name="ImagebuilderImageRecipeLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderImageRecipeLatestVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.major">Major</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.minor">Minor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.patch">Patch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion">ImagebuilderImageRecipeLatestVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Major`<sup>Required</sup> <a name="Major" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.major"></a>

```csharp
public string Major { get; }
```

- *Type:* string

---

##### `Minor`<sup>Required</sup> <a name="Minor" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.minor"></a>

```csharp
public string Minor { get; }
```

- *Type:* string

---

##### `Patch`<sup>Required</sup> <a name="Patch" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.patch"></a>

```csharp
public string Patch { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageRecipeLatestVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion">ImagebuilderImageRecipeLatestVersion</a>

---



