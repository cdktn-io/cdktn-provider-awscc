# `imagebuilderComponent` Submodule <a name="`imagebuilderComponent` Submodule" id="@cdktn/provider-awscc.imagebuilderComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderComponent <a name="ImagebuilderComponent" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component awscc_imagebuilder_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderComponent(Construct Scope, string Id, ImagebuilderComponentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig">ImagebuilderComponentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig">ImagebuilderComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription">ResetChangeDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions">ResetSupportedOsVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetChangeDescription` <a name="ResetChangeDescription" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription"></a>

```csharp
private void ResetChangeDescription()
```

##### `ResetData` <a name="ResetData" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSupportedOsVersions` <a name="ResetSupportedOsVersions" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions"></a>

```csharp
private void ResetSupportedOsVersions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetUri"></a>

```csharp
private void ResetUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderComponent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderComponent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderComponent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderComponent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ImagebuilderComponent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderComponent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.encrypted">Encrypted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.latestVersion">LatestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference">ImagebuilderComponentLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput">ChangeDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput">SupportedOsVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescription">ChangeDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions">SupportedOsVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.encrypted"></a>

```csharp
public IResolvable Encrypted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.latestVersion"></a>

```csharp
public ImagebuilderComponentLatestVersionOutputReference LatestVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference">ImagebuilderComponentLatestVersionOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ChangeDescriptionInput`<sup>Optional</sup> <a name="ChangeDescriptionInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput"></a>

```csharp
public string ChangeDescriptionInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `SupportedOsVersionsInput`<sup>Optional</sup> <a name="SupportedOsVersionsInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput"></a>

```csharp
public string[] SupportedOsVersionsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ChangeDescription`<sup>Required</sup> <a name="ChangeDescription" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescription"></a>

```csharp
public string ChangeDescription { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `SupportedOsVersions`<sup>Required</sup> <a name="SupportedOsVersions" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions"></a>

```csharp
public string[] SupportedOsVersions { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderComponentConfig <a name="ImagebuilderComponentConfig" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderComponentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Platform,
    string Version,
    string ChangeDescription = null,
    string Data = null,
    string Description = null,
    string KmsKeyId = null,
    string[] SupportedOsVersions = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.name">Name</a></code> | <code>string</code> | The name of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.platform">Platform</a></code> | <code>string</code> | The platform of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.version">Version</a></code> | <code>string</code> | The version of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription">ChangeDescription</a></code> | <code>string</code> | The change description of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.data">Data</a></code> | <code>string</code> | The data of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.description">Description</a></code> | <code>string</code> | The description of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The KMS key identifier used to encrypt the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions">SupportedOsVersions</a></code> | <code>string[]</code> | The operating system (OS) version supported by the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags associated with the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.uri">Uri</a></code> | <code>string</code> | The uri of the component. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

The platform of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}

---

##### `ChangeDescription`<sup>Optional</sup> <a name="ChangeDescription" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription"></a>

```csharp
public string ChangeDescription { get; set; }
```

- *Type:* string

The change description of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

The data of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The KMS key identifier used to encrypt the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}

---

##### `SupportedOsVersions`<sup>Optional</sup> <a name="SupportedOsVersions" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions"></a>

```csharp
public string[] SupportedOsVersions { get; set; }
```

- *Type:* string[]

The operating system (OS) version supported by the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The uri of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}

---

### ImagebuilderComponentLatestVersion <a name="ImagebuilderComponentLatestVersion" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderComponentLatestVersion {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderComponentLatestVersionOutputReference <a name="ImagebuilderComponentLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderComponentLatestVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.major">Major</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.minor">Minor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.patch">Patch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion">ImagebuilderComponentLatestVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Major`<sup>Required</sup> <a name="Major" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.major"></a>

```csharp
public string Major { get; }
```

- *Type:* string

---

##### `Minor`<sup>Required</sup> <a name="Minor" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.minor"></a>

```csharp
public string Minor { get; }
```

- *Type:* string

---

##### `Patch`<sup>Required</sup> <a name="Patch" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.patch"></a>

```csharp
public string Patch { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderComponentLatestVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion">ImagebuilderComponentLatestVersion</a>

---



