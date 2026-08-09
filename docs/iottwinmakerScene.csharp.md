# `iottwinmakerScene` Submodule <a name="`iottwinmakerScene` Submodule" id="@cdktn/provider-awscc.iottwinmakerScene"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IottwinmakerScene <a name="IottwinmakerScene" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene awscc_iottwinmaker_scene}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IottwinmakerScene(Construct Scope, string Id, IottwinmakerSceneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig">IottwinmakerSceneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig">IottwinmakerSceneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetSceneMetadata">ResetSceneMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetCapabilities"></a>

```csharp
private void ResetCapabilities()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetSceneMetadata` <a name="ResetSceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetSceneMetadata"></a>

```csharp
private void ResetSceneMetadata()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IottwinmakerScene resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IottwinmakerScene.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IottwinmakerScene.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IottwinmakerScene.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IottwinmakerScene.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IottwinmakerScene resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IottwinmakerScene to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IottwinmakerScene that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IottwinmakerScene to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.creationDateTime">CreationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.generatedSceneMetadata">GeneratedSceneMetadata</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.updateDateTime">UpdateDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocationInput">ContentLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneIdInput">SceneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadataInput">SceneMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilities">Capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocation">ContentLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneId">SceneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadata">SceneMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationDateTime`<sup>Required</sup> <a name="CreationDateTime" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.creationDateTime"></a>

```csharp
public string CreationDateTime { get; }
```

- *Type:* string

---

##### `GeneratedSceneMetadata`<sup>Required</sup> <a name="GeneratedSceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.generatedSceneMetadata"></a>

```csharp
public StringMap GeneratedSceneMetadata { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdateDateTime`<sup>Required</sup> <a name="UpdateDateTime" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.updateDateTime"></a>

```csharp
public string UpdateDateTime { get; }
```

- *Type:* string

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilitiesInput"></a>

```csharp
public string[] CapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `ContentLocationInput`<sup>Optional</sup> <a name="ContentLocationInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocationInput"></a>

```csharp
public string ContentLocationInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `SceneIdInput`<sup>Optional</sup> <a name="SceneIdInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneIdInput"></a>

```csharp
public string SceneIdInput { get; }
```

- *Type:* string

---

##### `SceneMetadataInput`<sup>Optional</sup> <a name="SceneMetadataInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SceneMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilities"></a>

```csharp
public string[] Capabilities { get; }
```

- *Type:* string[]

---

##### `ContentLocation`<sup>Required</sup> <a name="ContentLocation" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocation"></a>

```csharp
public string ContentLocation { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `SceneId`<sup>Required</sup> <a name="SceneId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneId"></a>

```csharp
public string SceneId { get; }
```

- *Type:* string

---

##### `SceneMetadata`<sup>Required</sup> <a name="SceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SceneMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IottwinmakerSceneConfig <a name="IottwinmakerSceneConfig" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IottwinmakerSceneConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ContentLocation,
    string SceneId,
    string WorkspaceId,
    string[] Capabilities = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> SceneMetadata = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.contentLocation">ContentLocation</a></code> | <code>string</code> | The relative path that specifies the location of the content definition file. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneId">SceneId</a></code> | <code>string</code> | The ID of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | The ID of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.capabilities">Capabilities</a></code> | <code>string[]</code> | A list of capabilities that the scene uses to render. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.description">Description</a></code> | <code>string</code> | The description of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneMetadata">SceneMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A key-value pair of scene metadata for the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContentLocation`<sup>Required</sup> <a name="ContentLocation" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.contentLocation"></a>

```csharp
public string ContentLocation { get; set; }
```

- *Type:* string

The relative path that specifies the location of the content definition file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#content_location IottwinmakerScene#content_location}

---

##### `SceneId`<sup>Required</sup> <a name="SceneId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneId"></a>

```csharp
public string SceneId { get; set; }
```

- *Type:* string

The ID of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#scene_id IottwinmakerScene#scene_id}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

The ID of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#workspace_id IottwinmakerScene#workspace_id}

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.capabilities"></a>

```csharp
public string[] Capabilities { get; set; }
```

- *Type:* string[]

A list of capabilities that the scene uses to render.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#capabilities IottwinmakerScene#capabilities}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#description IottwinmakerScene#description}

---

##### `SceneMetadata`<sup>Optional</sup> <a name="SceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SceneMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A key-value pair of scene metadata for the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#scene_metadata IottwinmakerScene#scene_metadata}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iottwinmaker_scene#tags IottwinmakerScene#tags}

---



