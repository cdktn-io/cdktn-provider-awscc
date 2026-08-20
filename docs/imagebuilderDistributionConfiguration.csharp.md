# `imagebuilderDistributionConfiguration` Submodule <a name="`imagebuilderDistributionConfiguration` Submodule" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderDistributionConfiguration <a name="ImagebuilderDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration awscc_imagebuilder_distribution_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfiguration(Construct Scope, string Id, ImagebuilderDistributionConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig">ImagebuilderDistributionConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig">ImagebuilderDistributionConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistributions">PutDistributions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDistributions` <a name="PutDistributions" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistributions"></a>

```csharp
private void PutDistributions(IResolvable|ImagebuilderDistributionConfigurationDistributions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistributions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderDistributionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderDistributionConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderDistributionConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderDistributionConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderDistributionConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ImagebuilderDistributionConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderDistributionConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderDistributionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderDistributionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributions">Distributions</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList">ImagebuilderDistributionConfigurationDistributionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributionsInput">DistributionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Distributions`<sup>Required</sup> <a name="Distributions" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributions"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsList Distributions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList">ImagebuilderDistributionConfigurationDistributionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DistributionsInput`<sup>Optional</sup> <a name="DistributionsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributionsInput"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributions[] DistributionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderDistributionConfigurationConfig <a name="ImagebuilderDistributionConfigurationConfig" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ImagebuilderDistributionConfigurationDistributions[] Distributions,
    string Name,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.distributions">Distributions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>[]</code> | The distributions of the distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.name">Name</a></code> | <code>string</code> | The name of the distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.description">Description</a></code> | <code>string</code> | The description of the distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags associated with the component. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Distributions`<sup>Required</sup> <a name="Distributions" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.distributions"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributions[] Distributions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>[]

The distributions of the distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#distributions ImagebuilderDistributionConfiguration#distributions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#tags ImagebuilderDistributionConfiguration#tags}

---

### ImagebuilderDistributionConfigurationDistributions <a name="ImagebuilderDistributionConfigurationDistributions" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributions {
    string Region,
    ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration AmiDistributionConfiguration = null,
    ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration ContainerDistributionConfiguration = null,
    IResolvable|ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations[] FastLaunchConfigurations = null,
    IResolvable|ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations[] LaunchTemplateConfigurations = null,
    string[] LicenseConfigurationArns = null,
    IResolvable|ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations[] SsmParameterConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.region">Region</a></code> | <code>string</code> | region. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.amiDistributionConfiguration">AmiDistributionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a></code> | The specific AMI settings (for example, launch permissions, AMI tags). |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.containerDistributionConfiguration">ContainerDistributionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a></code> | Container distribution settings for encryption, licensing, and sharing in a specific Region. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.fastLaunchConfigurations">FastLaunchConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>[]</code> | The Windows faster-launching configurations to use for AMI distribution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.launchTemplateConfigurations">LaunchTemplateConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>[]</code> | A group of launchTemplateConfiguration settings that apply to image distribution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.licenseConfigurationArns">LicenseConfigurationArns</a></code> | <code>string[]</code> | The License Manager Configuration to associate with the AMI in the specified Region. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.ssmParameterConfigurations">SsmParameterConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>[]</code> | The SSM parameter configurations to use for AMI distribution. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#region ImagebuilderDistributionConfiguration#region}

---

##### `AmiDistributionConfiguration`<sup>Optional</sup> <a name="AmiDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.amiDistributionConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration AmiDistributionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a>

The specific AMI settings (for example, launch permissions, AMI tags).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}

---

##### `ContainerDistributionConfiguration`<sup>Optional</sup> <a name="ContainerDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.containerDistributionConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration ContainerDistributionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a>

Container distribution settings for encryption, licensing, and sharing in a specific Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#container_distribution_configuration ImagebuilderDistributionConfiguration#container_distribution_configuration}

---

##### `FastLaunchConfigurations`<sup>Optional</sup> <a name="FastLaunchConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.fastLaunchConfigurations"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations[] FastLaunchConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>[]

The Windows faster-launching configurations to use for AMI distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#fast_launch_configurations ImagebuilderDistributionConfiguration#fast_launch_configurations}

---

##### `LaunchTemplateConfigurations`<sup>Optional</sup> <a name="LaunchTemplateConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.launchTemplateConfigurations"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations[] LaunchTemplateConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>[]

A group of launchTemplateConfiguration settings that apply to image distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#launch_template_configurations ImagebuilderDistributionConfiguration#launch_template_configurations}

---

##### `LicenseConfigurationArns`<sup>Optional</sup> <a name="LicenseConfigurationArns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.licenseConfigurationArns"></a>

```csharp
public string[] LicenseConfigurationArns { get; set; }
```

- *Type:* string[]

The License Manager Configuration to associate with the AMI in the specified Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}

---

##### `SsmParameterConfigurations`<sup>Optional</sup> <a name="SsmParameterConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.ssmParameterConfigurations"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations[] SsmParameterConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>[]

The SSM parameter configurations to use for AMI distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#ssm_parameter_configurations ImagebuilderDistributionConfiguration#ssm_parameter_configurations}

---

### ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration <a name="ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration {
    System.Collections.Generic.IDictionary<string, string> AmiTags = null,
    string Description = null,
    string KmsKeyId = null,
    ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration LaunchPermissionConfiguration = null,
    string Name = null,
    string[] TargetAccountIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.amiTags">AmiTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags to apply to AMIs distributed to this Region. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.description">Description</a></code> | <code>string</code> | The description of the AMI distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The KMS key identifier used to encrypt the distributed image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.launchPermissionConfiguration">LaunchPermissionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a></code> | Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.name">Name</a></code> | <code>string</code> | The name of the AMI distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.targetAccountIds">TargetAccountIds</a></code> | <code>string[]</code> | The ID of accounts to which you want to distribute an image. |

---

##### `AmiTags`<sup>Optional</sup> <a name="AmiTags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.amiTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AmiTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags to apply to AMIs distributed to this Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#ami_tags ImagebuilderDistributionConfiguration#ami_tags}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the AMI distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The KMS key identifier used to encrypt the distributed image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}

---

##### `LaunchPermissionConfiguration`<sup>Optional</sup> <a name="LaunchPermissionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.launchPermissionConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration LaunchPermissionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a>

Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#launch_permission_configuration ImagebuilderDistributionConfiguration#launch_permission_configuration}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the AMI distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}

---

##### `TargetAccountIds`<sup>Optional</sup> <a name="TargetAccountIds" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.targetAccountIds"></a>

```csharp
public string[] TargetAccountIds { get; set; }
```

- *Type:* string[]

The ID of accounts to which you want to distribute an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}

---

### ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration <a name="ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration {
    string[] OrganizationalUnitArns = null,
    string[] OrganizationArns = null,
    string[] UserGroups = null,
    string[] UserIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.organizationalUnitArns">OrganizationalUnitArns</a></code> | <code>string[]</code> | The ARN for an Organizations organizational unit (OU) that you want to share your AMI with. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.organizationArns">OrganizationArns</a></code> | <code>string[]</code> | The ARN for an Amazon Web Services Organization that you want to share your AMI with. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.userGroups">UserGroups</a></code> | <code>string[]</code> | The name of the group. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.userIds">UserIds</a></code> | <code>string[]</code> | The AWS account ID. |

---

##### `OrganizationalUnitArns`<sup>Optional</sup> <a name="OrganizationalUnitArns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.organizationalUnitArns"></a>

```csharp
public string[] OrganizationalUnitArns { get; set; }
```

- *Type:* string[]

The ARN for an Organizations organizational unit (OU) that you want to share your AMI with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#organizational_unit_arns ImagebuilderDistributionConfiguration#organizational_unit_arns}

---

##### `OrganizationArns`<sup>Optional</sup> <a name="OrganizationArns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.organizationArns"></a>

```csharp
public string[] OrganizationArns { get; set; }
```

- *Type:* string[]

The ARN for an Amazon Web Services Organization that you want to share your AMI with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#organization_arns ImagebuilderDistributionConfiguration#organization_arns}

---

##### `UserGroups`<sup>Optional</sup> <a name="UserGroups" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.userGroups"></a>

```csharp
public string[] UserGroups { get; set; }
```

- *Type:* string[]

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#user_groups ImagebuilderDistributionConfiguration#user_groups}

---

##### `UserIds`<sup>Optional</sup> <a name="UserIds" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.userIds"></a>

```csharp
public string[] UserIds { get; set; }
```

- *Type:* string[]

The AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#user_ids ImagebuilderDistributionConfiguration#user_ids}

---

### ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration <a name="ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration {
    string[] ContainerTags = null,
    string Description = null,
    ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository TargetRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.containerTags">ContainerTags</a></code> | <code>string[]</code> | Tags that are attached to the container distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.description">Description</a></code> | <code>string</code> | The description of the container distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a></code> | The destination repository for the container distribution configuration. |

---

##### `ContainerTags`<sup>Optional</sup> <a name="ContainerTags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.containerTags"></a>

```csharp
public string[] ContainerTags { get; set; }
```

- *Type:* string[]

Tags that are attached to the container distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#container_tags ImagebuilderDistributionConfiguration#container_tags}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the container distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}

---

##### `TargetRepository`<sup>Optional</sup> <a name="TargetRepository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.targetRepository"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository TargetRepository { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a>

The destination repository for the container distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#target_repository ImagebuilderDistributionConfiguration#target_repository}

---

### ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository <a name="ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository {
    string RepositoryName = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.property.repositoryName">RepositoryName</a></code> | <code>string</code> | The repository name of target container repository. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.property.service">Service</a></code> | <code>string</code> | The service of target container repository. |

---

##### `RepositoryName`<sup>Optional</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

The repository name of target container repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#repository_name ImagebuilderDistributionConfiguration#repository_name}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The service of target container repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#service ImagebuilderDistributionConfiguration#service}

---

### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations {
    string AccountId = null,
    bool|IResolvable Enabled = null,
    ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate LaunchTemplate = null,
    double MaxParallelLaunches = null,
    ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration SnapshotConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.accountId">AccountId</a></code> | <code>string</code> | The owner account ID for the fast-launch enabled Windows AMI. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean that represents the current state of faster launching for the Windows AMI. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a></code> | The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.maxParallelLaunches">MaxParallelLaunches</a></code> | <code>double</code> | The maximum number of parallel instances that are launched for creating resources. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.snapshotConfiguration">SnapshotConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a></code> | Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The owner account ID for the fast-launch enabled Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean that represents the current state of faster launching for the Windows AMI.

Set to true to start using Windows faster launching, or false to stop using it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#enabled ImagebuilderDistributionConfiguration#enabled}

---

##### `LaunchTemplate`<sup>Optional</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.launchTemplate"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate LaunchTemplate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a>

The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#launch_template ImagebuilderDistributionConfiguration#launch_template}

---

##### `MaxParallelLaunches`<sup>Optional</sup> <a name="MaxParallelLaunches" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.maxParallelLaunches"></a>

```csharp
public double MaxParallelLaunches { get; set; }
```

- *Type:* double

The maximum number of parallel instances that are launched for creating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#max_parallel_launches ImagebuilderDistributionConfiguration#max_parallel_launches}

---

##### `SnapshotConfiguration`<sup>Optional</sup> <a name="SnapshotConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.snapshotConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration SnapshotConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a>

Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#snapshot_configuration ImagebuilderDistributionConfiguration#snapshot_configuration}

---

### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate {
    string LaunchTemplateId = null,
    string LaunchTemplateName = null,
    string LaunchTemplateVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | The ID of the launch template to use for faster launching for a Windows AMI. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | The name of the launch template to use for faster launching for a Windows AMI. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateVersion">LaunchTemplateVersion</a></code> | <code>string</code> | The version of the launch template to use for faster launching for a Windows AMI. |

---

##### `LaunchTemplateId`<sup>Optional</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; set; }
```

- *Type:* string

The ID of the launch template to use for faster launching for a Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}

---

##### `LaunchTemplateName`<sup>Optional</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; set; }
```

- *Type:* string

The name of the launch template to use for faster launching for a Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#launch_template_name ImagebuilderDistributionConfiguration#launch_template_name}

---

##### `LaunchTemplateVersion`<sup>Optional</sup> <a name="LaunchTemplateVersion" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateVersion"></a>

```csharp
public string LaunchTemplateVersion { get; set; }
```

- *Type:* string

The version of the launch template to use for faster launching for a Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#launch_template_version ImagebuilderDistributionConfiguration#launch_template_version}

---

### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration {
    double TargetResourceCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration.property.targetResourceCount">TargetResourceCount</a></code> | <code>double</code> | The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI. |

---

##### `TargetResourceCount`<sup>Optional</sup> <a name="TargetResourceCount" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration.property.targetResourceCount"></a>

```csharp
public double TargetResourceCount { get; set; }
```

- *Type:* double

The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#target_resource_count ImagebuilderDistributionConfiguration#target_resource_count}

---

### ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations <a name="ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations {
    string AccountId = null,
    string LaunchTemplateId = null,
    bool|IResolvable SetDefaultVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.accountId">AccountId</a></code> | <code>string</code> | The account ID that this configuration applies to. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | Identifies the EC2 launch template to use. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.setDefaultVersion">SetDefaultVersion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set the specified EC2 launch template as the default launch template for the specified account. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account ID that this configuration applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}

---

##### `LaunchTemplateId`<sup>Optional</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; set; }
```

- *Type:* string

Identifies the EC2 launch template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}

---

##### `SetDefaultVersion`<sup>Optional</sup> <a name="SetDefaultVersion" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.setDefaultVersion"></a>

```csharp
public bool|IResolvable SetDefaultVersion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set the specified EC2 launch template as the default launch template for the specified account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#set_default_version ImagebuilderDistributionConfiguration#set_default_version}

---

### ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations <a name="ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations {
    string AmiAccountId = null,
    string DataType = null,
    string ParameterName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.amiAccountId">AmiAccountId</a></code> | <code>string</code> | The account ID for the AMI to update the parameter with. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.dataType">DataType</a></code> | <code>string</code> | The data type of the SSM parameter. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.parameterName">ParameterName</a></code> | <code>string</code> | The name of the SSM parameter. |

---

##### `AmiAccountId`<sup>Optional</sup> <a name="AmiAccountId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.amiAccountId"></a>

```csharp
public string AmiAccountId { get; set; }
```

- *Type:* string

The account ID for the AMI to update the parameter with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#ami_account_id ImagebuilderDistributionConfiguration#ami_account_id}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

The data type of the SSM parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#data_type ImagebuilderDistributionConfiguration#data_type}

---

##### `ParameterName`<sup>Optional</sup> <a name="ParameterName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.parameterName"></a>

```csharp
public string ParameterName { get; set; }
```

- *Type:* string

The name of the SSM parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_distribution_configuration#parameter_name ImagebuilderDistributionConfiguration#parameter_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetOrganizationalUnitArns">ResetOrganizationalUnitArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetOrganizationArns">ResetOrganizationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetUserGroups">ResetUserGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetUserIds">ResetUserIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrganizationalUnitArns` <a name="ResetOrganizationalUnitArns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetOrganizationalUnitArns"></a>

```csharp
private void ResetOrganizationalUnitArns()
```

##### `ResetOrganizationArns` <a name="ResetOrganizationArns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetOrganizationArns"></a>

```csharp
private void ResetOrganizationArns()
```

##### `ResetUserGroups` <a name="ResetUserGroups" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetUserGroups"></a>

```csharp
private void ResetUserGroups()
```

##### `ResetUserIds` <a name="ResetUserIds" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetUserIds"></a>

```csharp
private void ResetUserIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArnsInput">OrganizationalUnitArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArnsInput">OrganizationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroupsInput">UserGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIdsInput">UserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArns">OrganizationalUnitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArns">OrganizationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroups">UserGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIds">UserIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrganizationalUnitArnsInput`<sup>Optional</sup> <a name="OrganizationalUnitArnsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArnsInput"></a>

```csharp
public string[] OrganizationalUnitArnsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationArnsInput`<sup>Optional</sup> <a name="OrganizationArnsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArnsInput"></a>

```csharp
public string[] OrganizationArnsInput { get; }
```

- *Type:* string[]

---

##### `UserGroupsInput`<sup>Optional</sup> <a name="UserGroupsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroupsInput"></a>

```csharp
public string[] UserGroupsInput { get; }
```

- *Type:* string[]

---

##### `UserIdsInput`<sup>Optional</sup> <a name="UserIdsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIdsInput"></a>

```csharp
public string[] UserIdsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitArns`<sup>Required</sup> <a name="OrganizationalUnitArns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArns"></a>

```csharp
public string[] OrganizationalUnitArns { get; }
```

- *Type:* string[]

---

##### `OrganizationArns`<sup>Required</sup> <a name="OrganizationArns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArns"></a>

```csharp
public string[] OrganizationArns { get; }
```

- *Type:* string[]

---

##### `UserGroups`<sup>Required</sup> <a name="UserGroups" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroups"></a>

```csharp
public string[] UserGroups { get; }
```

- *Type:* string[]

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIds"></a>

```csharp
public string[] UserIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.putLaunchPermissionConfiguration">PutLaunchPermissionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetAmiTags">ResetAmiTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetLaunchPermissionConfiguration">ResetLaunchPermissionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetTargetAccountIds">ResetTargetAccountIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchPermissionConfiguration` <a name="PutLaunchPermissionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.putLaunchPermissionConfiguration"></a>

```csharp
private void PutLaunchPermissionConfiguration(ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.putLaunchPermissionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a>

---

##### `ResetAmiTags` <a name="ResetAmiTags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetAmiTags"></a>

```csharp
private void ResetAmiTags()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLaunchPermissionConfiguration` <a name="ResetLaunchPermissionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetLaunchPermissionConfiguration"></a>

```csharp
private void ResetLaunchPermissionConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTargetAccountIds` <a name="ResetTargetAccountIds" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetTargetAccountIds"></a>

```csharp
private void ResetTargetAccountIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfiguration">LaunchPermissionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTagsInput">AmiTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfigurationInput">LaunchPermissionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIdsInput">TargetAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTags">AmiTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIds">TargetAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchPermissionConfiguration`<sup>Required</sup> <a name="LaunchPermissionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference LaunchPermissionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference</a>

---

##### `AmiTagsInput`<sup>Optional</sup> <a name="AmiTagsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AmiTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LaunchPermissionConfigurationInput`<sup>Optional</sup> <a name="LaunchPermissionConfigurationInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfigurationInput"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration LaunchPermissionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetAccountIdsInput`<sup>Optional</sup> <a name="TargetAccountIdsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIdsInput"></a>

```csharp
public string[] TargetAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `AmiTags`<sup>Required</sup> <a name="AmiTags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AmiTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetAccountIds`<sup>Required</sup> <a name="TargetAccountIds" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIds"></a>

```csharp
public string[] TargetAccountIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.putTargetRepository">PutTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetContainerTags">ResetContainerTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetTargetRepository">ResetTargetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetRepository` <a name="PutTargetRepository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.putTargetRepository"></a>

```csharp
private void PutTargetRepository(ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.putTargetRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a>

---

##### `ResetContainerTags` <a name="ResetContainerTags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetContainerTags"></a>

```csharp
private void ResetContainerTags()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTargetRepository` <a name="ResetTargetRepository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetTargetRepository"></a>

```csharp
private void ResetTargetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTagsInput">ContainerTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepositoryInput">TargetRepositoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTags">ContainerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetRepository`<sup>Required</sup> <a name="TargetRepository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepository"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference TargetRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference</a>

---

##### `ContainerTagsInput`<sup>Optional</sup> <a name="ContainerTagsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTagsInput"></a>

```csharp
public string[] ContainerTagsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `TargetRepositoryInput`<sup>Optional</sup> <a name="TargetRepositoryInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepositoryInput"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository TargetRepositoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a>

---

##### `ContainerTags`<sup>Required</sup> <a name="ContainerTags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTags"></a>

```csharp
public string[] ContainerTags { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resetRepositoryName">ResetRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepositoryName` <a name="ResetRepositoryName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resetRepositoryName"></a>

```csharp
private void ResetRepositoryName()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a>

---


### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateId">ResetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateName">ResetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateVersion">ResetLaunchTemplateVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLaunchTemplateId` <a name="ResetLaunchTemplateId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```csharp
private void ResetLaunchTemplateId()
```

##### `ResetLaunchTemplateName` <a name="ResetLaunchTemplateName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```csharp
private void ResetLaunchTemplateName()
```

##### `ResetLaunchTemplateVersion` <a name="ResetLaunchTemplateVersion" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateVersion"></a>

```csharp
private void ResetLaunchTemplateVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateNameInput">LaunchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersionInput">LaunchTemplateVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersion">LaunchTemplateVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```csharp
public string LaunchTemplateIdInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateNameInput`<sup>Optional</sup> <a name="LaunchTemplateNameInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```csharp
public string LaunchTemplateNameInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateVersionInput`<sup>Optional</sup> <a name="LaunchTemplateVersionInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersionInput"></a>

```csharp
public string LaunchTemplateVersionInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; }
```

- *Type:* string

---

##### `LaunchTemplateVersion`<sup>Required</sup> <a name="LaunchTemplateVersion" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersion"></a>

```csharp
public string LaunchTemplateVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a>

---


### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get"></a>

```csharp
private ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>[]

---


### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putSnapshotConfiguration">PutSnapshotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetLaunchTemplate">ResetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetMaxParallelLaunches">ResetMaxParallelLaunches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetSnapshotConfiguration">ResetSnapshotConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putLaunchTemplate"></a>

```csharp
private void PutLaunchTemplate(ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a>

---

##### `PutSnapshotConfiguration` <a name="PutSnapshotConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putSnapshotConfiguration"></a>

```csharp
private void PutSnapshotConfiguration(ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putSnapshotConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLaunchTemplate` <a name="ResetLaunchTemplate" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetLaunchTemplate"></a>

```csharp
private void ResetLaunchTemplate()
```

##### `ResetMaxParallelLaunches` <a name="ResetMaxParallelLaunches" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetMaxParallelLaunches"></a>

```csharp
private void ResetMaxParallelLaunches()
```

##### `ResetSnapshotConfiguration` <a name="ResetSnapshotConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetSnapshotConfiguration"></a>

```csharp
private void ResetSnapshotConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfiguration">SnapshotConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunchesInput">MaxParallelLaunchesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfigurationInput">SnapshotConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunches">MaxParallelLaunches</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplate"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference LaunchTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference</a>

---

##### `SnapshotConfiguration`<sup>Required</sup> <a name="SnapshotConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference SnapshotConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplateInput"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate LaunchTemplateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a>

---

##### `MaxParallelLaunchesInput`<sup>Optional</sup> <a name="MaxParallelLaunchesInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunchesInput"></a>

```csharp
public double MaxParallelLaunchesInput { get; }
```

- *Type:* double

---

##### `SnapshotConfigurationInput`<sup>Optional</sup> <a name="SnapshotConfigurationInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfigurationInput"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration SnapshotConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxParallelLaunches`<sup>Required</sup> <a name="MaxParallelLaunches" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunches"></a>

```csharp
public double MaxParallelLaunches { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>

---


### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resetTargetResourceCount">ResetTargetResourceCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetResourceCount` <a name="ResetTargetResourceCount" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resetTargetResourceCount"></a>

```csharp
private void ResetTargetResourceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCountInput">TargetResourceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCount">TargetResourceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetResourceCountInput`<sup>Optional</sup> <a name="TargetResourceCountInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCountInput"></a>

```csharp
public double TargetResourceCountInput { get; }
```

- *Type:* double

---

##### `TargetResourceCount`<sup>Required</sup> <a name="TargetResourceCount" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCount"></a>

```csharp
public double TargetResourceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList <a name="ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get"></a>

```csharp
private ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>[]

---


### ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetLaunchTemplateId">ResetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetSetDefaultVersion">ResetSetDefaultVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetLaunchTemplateId` <a name="ResetLaunchTemplateId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetLaunchTemplateId"></a>

```csharp
private void ResetLaunchTemplateId()
```

##### `ResetSetDefaultVersion` <a name="ResetSetDefaultVersion" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetSetDefaultVersion"></a>

```csharp
private void ResetSetDefaultVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersionInput">SetDefaultVersionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersion">SetDefaultVersion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateIdInput"></a>

```csharp
public string LaunchTemplateIdInput { get; }
```

- *Type:* string

---

##### `SetDefaultVersionInput`<sup>Optional</sup> <a name="SetDefaultVersionInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersionInput"></a>

```csharp
public bool|IResolvable SetDefaultVersionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `SetDefaultVersion`<sup>Required</sup> <a name="SetDefaultVersion" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersion"></a>

```csharp
public bool|IResolvable SetDefaultVersion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>

---


### ImagebuilderDistributionConfigurationDistributionsList <a name="ImagebuilderDistributionConfigurationDistributionsList" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.get"></a>

```csharp
private ImagebuilderDistributionConfigurationDistributionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>[]

---


### ImagebuilderDistributionConfigurationDistributionsOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration">PutAmiDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putContainerDistributionConfiguration">PutContainerDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putFastLaunchConfigurations">PutFastLaunchConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putLaunchTemplateConfigurations">PutLaunchTemplateConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putSsmParameterConfigurations">PutSsmParameterConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetAmiDistributionConfiguration">ResetAmiDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetContainerDistributionConfiguration">ResetContainerDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetFastLaunchConfigurations">ResetFastLaunchConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetLaunchTemplateConfigurations">ResetLaunchTemplateConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetLicenseConfigurationArns">ResetLicenseConfigurationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetSsmParameterConfigurations">ResetSsmParameterConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmiDistributionConfiguration` <a name="PutAmiDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration"></a>

```csharp
private void PutAmiDistributionConfiguration(ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a>

---

##### `PutContainerDistributionConfiguration` <a name="PutContainerDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putContainerDistributionConfiguration"></a>

```csharp
private void PutContainerDistributionConfiguration(ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putContainerDistributionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a>

---

##### `PutFastLaunchConfigurations` <a name="PutFastLaunchConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putFastLaunchConfigurations"></a>

```csharp
private void PutFastLaunchConfigurations(IResolvable|ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putFastLaunchConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>[]

---

##### `PutLaunchTemplateConfigurations` <a name="PutLaunchTemplateConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putLaunchTemplateConfigurations"></a>

```csharp
private void PutLaunchTemplateConfigurations(IResolvable|ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putLaunchTemplateConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>[]

---

##### `PutSsmParameterConfigurations` <a name="PutSsmParameterConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putSsmParameterConfigurations"></a>

```csharp
private void PutSsmParameterConfigurations(IResolvable|ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putSsmParameterConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>[]

---

##### `ResetAmiDistributionConfiguration` <a name="ResetAmiDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetAmiDistributionConfiguration"></a>

```csharp
private void ResetAmiDistributionConfiguration()
```

##### `ResetContainerDistributionConfiguration` <a name="ResetContainerDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetContainerDistributionConfiguration"></a>

```csharp
private void ResetContainerDistributionConfiguration()
```

##### `ResetFastLaunchConfigurations` <a name="ResetFastLaunchConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetFastLaunchConfigurations"></a>

```csharp
private void ResetFastLaunchConfigurations()
```

##### `ResetLaunchTemplateConfigurations` <a name="ResetLaunchTemplateConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetLaunchTemplateConfigurations"></a>

```csharp
private void ResetLaunchTemplateConfigurations()
```

##### `ResetLicenseConfigurationArns` <a name="ResetLicenseConfigurationArns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetLicenseConfigurationArns"></a>

```csharp
private void ResetLicenseConfigurationArns()
```

##### `ResetSsmParameterConfigurations` <a name="ResetSsmParameterConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetSsmParameterConfigurations"></a>

```csharp
private void ResetSsmParameterConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfiguration">AmiDistributionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfiguration">ContainerDistributionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurations">FastLaunchConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurations">LaunchTemplateConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurations">SsmParameterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfigurationInput">AmiDistributionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfigurationInput">ContainerDistributionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurationsInput">FastLaunchConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurationsInput">LaunchTemplateConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArnsInput">LicenseConfigurationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurationsInput">SsmParameterConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArns">LicenseConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmiDistributionConfiguration`<sup>Required</sup> <a name="AmiDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference AmiDistributionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference</a>

---

##### `ContainerDistributionConfiguration`<sup>Required</sup> <a name="ContainerDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference ContainerDistributionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference</a>

---

##### `FastLaunchConfigurations`<sup>Required</sup> <a name="FastLaunchConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurations"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList FastLaunchConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList</a>

---

##### `LaunchTemplateConfigurations`<sup>Required</sup> <a name="LaunchTemplateConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurations"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList LaunchTemplateConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList</a>

---

##### `SsmParameterConfigurations`<sup>Required</sup> <a name="SsmParameterConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurations"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList SsmParameterConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList</a>

---

##### `AmiDistributionConfigurationInput`<sup>Optional</sup> <a name="AmiDistributionConfigurationInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfigurationInput"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration AmiDistributionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a>

---

##### `ContainerDistributionConfigurationInput`<sup>Optional</sup> <a name="ContainerDistributionConfigurationInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfigurationInput"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration ContainerDistributionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a>

---

##### `FastLaunchConfigurationsInput`<sup>Optional</sup> <a name="FastLaunchConfigurationsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurationsInput"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations[] FastLaunchConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>[]

---

##### `LaunchTemplateConfigurationsInput`<sup>Optional</sup> <a name="LaunchTemplateConfigurationsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurationsInput"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations[] LaunchTemplateConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>[]

---

##### `LicenseConfigurationArnsInput`<sup>Optional</sup> <a name="LicenseConfigurationArnsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArnsInput"></a>

```csharp
public string[] LicenseConfigurationArnsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SsmParameterConfigurationsInput`<sup>Optional</sup> <a name="SsmParameterConfigurationsInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurationsInput"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations[] SsmParameterConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>[]

---

##### `LicenseConfigurationArns`<sup>Required</sup> <a name="LicenseConfigurationArns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArns"></a>

```csharp
public string[] LicenseConfigurationArns { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>

---


### ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList <a name="ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get"></a>

```csharp
private ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>[]

---


### ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetAmiAccountId">ResetAmiAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetParameterName">ResetParameterName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmiAccountId` <a name="ResetAmiAccountId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetAmiAccountId"></a>

```csharp
private void ResetAmiAccountId()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetDataType"></a>

```csharp
private void ResetDataType()
```

##### `ResetParameterName` <a name="ResetParameterName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetParameterName"></a>

```csharp
private void ResetParameterName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountIdInput">AmiAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountId">AmiAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmiAccountIdInput`<sup>Optional</sup> <a name="AmiAccountIdInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountIdInput"></a>

```csharp
public string AmiAccountIdInput { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterNameInput"></a>

```csharp
public string ParameterNameInput { get; }
```

- *Type:* string

---

##### `AmiAccountId`<sup>Required</sup> <a name="AmiAccountId" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountId"></a>

```csharp
public string AmiAccountId { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>

---



