# `connectWorkspace` Submodule <a name="`connectWorkspace` Submodule" id="@cdktn/provider-awscc.connectWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectWorkspace <a name="ConnectWorkspace" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace awscc_connect_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspace(Construct Scope, string Id, ConnectWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig">ConnectWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig">ConnectWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia">PutMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages">PutPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme">PutTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetAssociations">ResetAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetMedia">ResetMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetPages">ResetPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTheme">ResetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMedia` <a name="PutMedia" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia"></a>

```csharp
private void PutMedia(IResolvable|ConnectWorkspaceMedia[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]

---

##### `PutPages` <a name="PutPages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages"></a>

```csharp
private void PutPages(IResolvable|ConnectWorkspacePages[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectWorkspaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]

---

##### `PutTheme` <a name="PutTheme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme"></a>

```csharp
private void PutTheme(ConnectWorkspaceTheme Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

---

##### `ResetAssociations` <a name="ResetAssociations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetAssociations"></a>

```csharp
private void ResetAssociations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMedia` <a name="ResetMedia" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetMedia"></a>

```csharp
private void ResetMedia()
```

##### `ResetPages` <a name="ResetPages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetPages"></a>

```csharp
private void ResetPages()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTheme` <a name="ResetTheme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTheme"></a>

```csharp
private void ResetTheme()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectWorkspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.media">Media</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList">ConnectWorkspaceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pages">Pages</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList">ConnectWorkspacePagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList">ConnectWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.theme">Theme</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference">ConnectWorkspaceThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associationsInput">AssociationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.mediaInput">MediaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pagesInput">PagesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.themeInput">ThemeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associations">Associations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Media`<sup>Required</sup> <a name="Media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.media"></a>

```csharp
public ConnectWorkspaceMediaList Media { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList">ConnectWorkspaceMediaList</a>

---

##### `Pages`<sup>Required</sup> <a name="Pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pages"></a>

```csharp
public ConnectWorkspacePagesList Pages { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList">ConnectWorkspacePagesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tags"></a>

```csharp
public ConnectWorkspaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList">ConnectWorkspaceTagsList</a>

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.theme"></a>

```csharp
public ConnectWorkspaceThemeOutputReference Theme { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference">ConnectWorkspaceThemeOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `AssociationsInput`<sup>Optional</sup> <a name="AssociationsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associationsInput"></a>

```csharp
public string[] AssociationsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `MediaInput`<sup>Optional</sup> <a name="MediaInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.mediaInput"></a>

```csharp
public IResolvable|ConnectWorkspaceMedia[] MediaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PagesInput`<sup>Optional</sup> <a name="PagesInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pagesInput"></a>

```csharp
public IResolvable|ConnectWorkspacePages[] PagesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tagsInput"></a>

```csharp
public IResolvable|ConnectWorkspaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]

---

##### `ThemeInput`<sup>Optional</sup> <a name="ThemeInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.themeInput"></a>

```csharp
public IResolvable|ConnectWorkspaceTheme ThemeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `Associations`<sup>Required</sup> <a name="Associations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associations"></a>

```csharp
public string[] Associations { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectWorkspaceConfig <a name="ConnectWorkspaceConfig" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceArn,
    string Name,
    string[] Associations = null,
    string Description = null,
    IResolvable|ConnectWorkspaceMedia[] Media = null,
    IResolvable|ConnectWorkspacePages[] Pages = null,
    IResolvable|ConnectWorkspaceTags[] Tags = null,
    ConnectWorkspaceTheme Theme = null,
    string Title = null,
    string Visibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.name">Name</a></code> | <code>string</code> | The name of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.associations">Associations</a></code> | <code>string[]</code> | The resource ARNs associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.description">Description</a></code> | <code>string</code> | The description of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.media">Media</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]</code> | The media items for the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.pages">Pages</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]</code> | The pages associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.theme">Theme</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | The theme configuration for the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.title">Title</a></code> | <code>string</code> | The title of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.visibility">Visibility</a></code> | <code>string</code> | The visibility of the workspace. Will always be set to ASSIGNED oninitial creation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#instance_arn ConnectWorkspace#instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#name ConnectWorkspace#name}

---

##### `Associations`<sup>Optional</sup> <a name="Associations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.associations"></a>

```csharp
public string[] Associations { get; set; }
```

- *Type:* string[]

The resource ARNs associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#associations ConnectWorkspace#associations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#description ConnectWorkspace#description}

---

##### `Media`<sup>Optional</sup> <a name="Media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.media"></a>

```csharp
public IResolvable|ConnectWorkspaceMedia[] Media { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]

The media items for the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#media ConnectWorkspace#media}

---

##### `Pages`<sup>Optional</sup> <a name="Pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.pages"></a>

```csharp
public IResolvable|ConnectWorkspacePages[] Pages { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]

The pages associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#pages ConnectWorkspace#pages}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.tags"></a>

```csharp
public IResolvable|ConnectWorkspaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#tags ConnectWorkspace#tags}

---

##### `Theme`<sup>Optional</sup> <a name="Theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.theme"></a>

```csharp
public ConnectWorkspaceTheme Theme { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

The theme configuration for the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#theme ConnectWorkspace#theme}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#title ConnectWorkspace#title}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

The visibility of the workspace. Will always be set to ASSIGNED oninitial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#visibility ConnectWorkspace#visibility}

---

### ConnectWorkspaceMedia <a name="ConnectWorkspaceMedia" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceMedia {
    string Source = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#source ConnectWorkspace#source}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.type">Type</a></code> | <code>string</code> | The type of media. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#source ConnectWorkspace#source}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of media.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#type ConnectWorkspace#type}

---

### ConnectWorkspacePages <a name="ConnectWorkspacePages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspacePages {
    string InputData = null,
    string Page = null,
    string ResourceArn = null,
    string Slug = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.inputData">InputData</a></code> | <code>string</code> | The input data for the page. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.page">Page</a></code> | <code>string</code> | The page identifier. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.resourceArn">ResourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the resource associated with the page. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.slug">Slug</a></code> | <code>string</code> | The slug for the page. |

---

##### `InputData`<sup>Optional</sup> <a name="InputData" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.inputData"></a>

```csharp
public string InputData { get; set; }
```

- *Type:* string

The input data for the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#input_data ConnectWorkspace#input_data}

---

##### `Page`<sup>Optional</sup> <a name="Page" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.page"></a>

```csharp
public string Page { get; set; }
```

- *Type:* string

The page identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#page ConnectWorkspace#page}

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the resource associated with the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#resource_arn ConnectWorkspace#resource_arn}

---

##### `Slug`<sup>Optional</sup> <a name="Slug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.slug"></a>

```csharp
public string Slug { get; set; }
```

- *Type:* string

The slug for the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#slug ConnectWorkspace#slug}

---

### ConnectWorkspaceTags <a name="ConnectWorkspaceTags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#key ConnectWorkspace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#value ConnectWorkspace#value}

---

### ConnectWorkspaceTheme <a name="ConnectWorkspaceTheme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceTheme {
    ConnectWorkspaceThemeDark Dark = null,
    ConnectWorkspaceThemeLight Light = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.dark">Dark</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#dark ConnectWorkspace#dark}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.light">Light</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#light ConnectWorkspace#light}. |

---

##### `Dark`<sup>Optional</sup> <a name="Dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.dark"></a>

```csharp
public ConnectWorkspaceThemeDark Dark { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#dark ConnectWorkspace#dark}.

---

##### `Light`<sup>Optional</sup> <a name="Light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.light"></a>

```csharp
public ConnectWorkspaceThemeLight Light { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#light ConnectWorkspace#light}.

---

### ConnectWorkspaceThemeDark <a name="ConnectWorkspaceThemeDark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDark {
    ConnectWorkspaceThemeDarkPalette Palette = null,
    ConnectWorkspaceThemeDarkTypography Typography = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.palette">Palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.typography">Typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}. |

---

##### `Palette`<sup>Optional</sup> <a name="Palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.palette"></a>

```csharp
public ConnectWorkspaceThemeDarkPalette Palette { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}.

---

##### `Typography`<sup>Optional</sup> <a name="Typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.typography"></a>

```csharp
public ConnectWorkspaceThemeDarkTypography Typography { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}.

---

### ConnectWorkspaceThemeDarkPalette <a name="ConnectWorkspaceThemeDarkPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkPalette {
    ConnectWorkspaceThemeDarkPaletteCanvas Canvas = null,
    ConnectWorkspaceThemeDarkPaletteHeader Header = null,
    ConnectWorkspaceThemeDarkPaletteNavigation Navigation = null,
    ConnectWorkspaceThemeDarkPalettePrimary Primary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.canvas">Canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#header ConnectWorkspace#header}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.navigation">Navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}. |

---

##### `Canvas`<sup>Optional</sup> <a name="Canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.canvas"></a>

```csharp
public ConnectWorkspaceThemeDarkPaletteCanvas Canvas { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.header"></a>

```csharp
public ConnectWorkspaceThemeDarkPaletteHeader Header { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#header ConnectWorkspace#header}.

---

##### `Navigation`<sup>Optional</sup> <a name="Navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.navigation"></a>

```csharp
public ConnectWorkspaceThemeDarkPaletteNavigation Navigation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.primary"></a>

```csharp
public ConnectWorkspaceThemeDarkPalettePrimary Primary { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}.

---

### ConnectWorkspaceThemeDarkPaletteCanvas <a name="ConnectWorkspaceThemeDarkPaletteCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkPaletteCanvas {
    string ActiveBackground = null,
    string ContainerBackground = null,
    string PageBackground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.activeBackground">ActiveBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.containerBackground">ContainerBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.pageBackground">PageBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}. |

---

##### `ActiveBackground`<sup>Optional</sup> <a name="ActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.activeBackground"></a>

```csharp
public string ActiveBackground { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}.

---

##### `ContainerBackground`<sup>Optional</sup> <a name="ContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.containerBackground"></a>

```csharp
public string ContainerBackground { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}.

---

##### `PageBackground`<sup>Optional</sup> <a name="PageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.pageBackground"></a>

```csharp
public string PageBackground { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}.

---

### ConnectWorkspaceThemeDarkPaletteHeader <a name="ConnectWorkspaceThemeDarkPaletteHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkPaletteHeader {
    string Background = null,
    bool|IResolvable InvertActionsColors = null,
    string Text = null,
    string TextHover = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.background">Background</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.invertActionsColors">InvertActionsColors</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.textHover">TextHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `InvertActionsColors`<sup>Optional</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.invertActionsColors"></a>

```csharp
public bool|IResolvable InvertActionsColors { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `TextHover`<sup>Optional</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.textHover"></a>

```csharp
public string TextHover { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeDarkPaletteNavigation <a name="ConnectWorkspaceThemeDarkPaletteNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkPaletteNavigation {
    string Background = null,
    bool|IResolvable InvertActionsColors = null,
    string Text = null,
    string TextActive = null,
    string TextBackgroundActive = null,
    string TextBackgroundHover = null,
    string TextHover = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.background">Background</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.invertActionsColors">InvertActionsColors</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textActive">TextActive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundActive">TextBackgroundActive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundHover">TextBackgroundHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textHover">TextHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `InvertActionsColors`<sup>Optional</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.invertActionsColors"></a>

```csharp
public bool|IResolvable InvertActionsColors { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `TextActive`<sup>Optional</sup> <a name="TextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textActive"></a>

```csharp
public string TextActive { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}.

---

##### `TextBackgroundActive`<sup>Optional</sup> <a name="TextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundActive"></a>

```csharp
public string TextBackgroundActive { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}.

---

##### `TextBackgroundHover`<sup>Optional</sup> <a name="TextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundHover"></a>

```csharp
public string TextBackgroundHover { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}.

---

##### `TextHover`<sup>Optional</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textHover"></a>

```csharp
public string TextHover { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeDarkPalettePrimary <a name="ConnectWorkspaceThemeDarkPalettePrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkPalettePrimary {
    string Active = null,
    string ContrastText = null,
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.active">Active</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#active ConnectWorkspace#active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.contrastText">ContrastText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.active"></a>

```csharp
public string Active { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#active ConnectWorkspace#active}.

---

##### `ContrastText`<sup>Optional</sup> <a name="ContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.contrastText"></a>

```csharp
public string ContrastText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeDarkTypography <a name="ConnectWorkspaceThemeDarkTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkTypography {
    ConnectWorkspaceThemeDarkTypographyFontFamily FontFamily = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.property.fontFamily">FontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}. |

---

##### `FontFamily`<sup>Optional</sup> <a name="FontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.property.fontFamily"></a>

```csharp
public ConnectWorkspaceThemeDarkTypographyFontFamily FontFamily { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}.

---

### ConnectWorkspaceThemeDarkTypographyFontFamily <a name="ConnectWorkspaceThemeDarkTypographyFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkTypographyFontFamily {
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeLight <a name="ConnectWorkspaceThemeLight" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLight {
    ConnectWorkspaceThemeLightPalette Palette = null,
    ConnectWorkspaceThemeLightTypography Typography = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.palette">Palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.typography">Typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}. |

---

##### `Palette`<sup>Optional</sup> <a name="Palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.palette"></a>

```csharp
public ConnectWorkspaceThemeLightPalette Palette { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}.

---

##### `Typography`<sup>Optional</sup> <a name="Typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.typography"></a>

```csharp
public ConnectWorkspaceThemeLightTypography Typography { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}.

---

### ConnectWorkspaceThemeLightPalette <a name="ConnectWorkspaceThemeLightPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightPalette {
    ConnectWorkspaceThemeLightPaletteCanvas Canvas = null,
    ConnectWorkspaceThemeLightPaletteHeader Header = null,
    ConnectWorkspaceThemeLightPaletteNavigation Navigation = null,
    ConnectWorkspaceThemeLightPalettePrimary Primary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.canvas">Canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#header ConnectWorkspace#header}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.navigation">Navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}. |

---

##### `Canvas`<sup>Optional</sup> <a name="Canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.canvas"></a>

```csharp
public ConnectWorkspaceThemeLightPaletteCanvas Canvas { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.header"></a>

```csharp
public ConnectWorkspaceThemeLightPaletteHeader Header { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#header ConnectWorkspace#header}.

---

##### `Navigation`<sup>Optional</sup> <a name="Navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.navigation"></a>

```csharp
public ConnectWorkspaceThemeLightPaletteNavigation Navigation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.primary"></a>

```csharp
public ConnectWorkspaceThemeLightPalettePrimary Primary { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}.

---

### ConnectWorkspaceThemeLightPaletteCanvas <a name="ConnectWorkspaceThemeLightPaletteCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightPaletteCanvas {
    string ActiveBackground = null,
    string ContainerBackground = null,
    string PageBackground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.activeBackground">ActiveBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.containerBackground">ContainerBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.pageBackground">PageBackground</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}. |

---

##### `ActiveBackground`<sup>Optional</sup> <a name="ActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.activeBackground"></a>

```csharp
public string ActiveBackground { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}.

---

##### `ContainerBackground`<sup>Optional</sup> <a name="ContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.containerBackground"></a>

```csharp
public string ContainerBackground { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}.

---

##### `PageBackground`<sup>Optional</sup> <a name="PageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.pageBackground"></a>

```csharp
public string PageBackground { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}.

---

### ConnectWorkspaceThemeLightPaletteHeader <a name="ConnectWorkspaceThemeLightPaletteHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightPaletteHeader {
    string Background = null,
    bool|IResolvable InvertActionsColors = null,
    string Text = null,
    string TextHover = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.background">Background</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.invertActionsColors">InvertActionsColors</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.textHover">TextHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `InvertActionsColors`<sup>Optional</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.invertActionsColors"></a>

```csharp
public bool|IResolvable InvertActionsColors { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `TextHover`<sup>Optional</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.textHover"></a>

```csharp
public string TextHover { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeLightPaletteNavigation <a name="ConnectWorkspaceThemeLightPaletteNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightPaletteNavigation {
    string Background = null,
    bool|IResolvable InvertActionsColors = null,
    string Text = null,
    string TextActive = null,
    string TextBackgroundActive = null,
    string TextBackgroundHover = null,
    string TextHover = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.background">Background</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.invertActionsColors">InvertActionsColors</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textActive">TextActive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundActive">TextBackgroundActive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundHover">TextBackgroundHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textHover">TextHover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `InvertActionsColors`<sup>Optional</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.invertActionsColors"></a>

```csharp
public bool|IResolvable InvertActionsColors { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `TextActive`<sup>Optional</sup> <a name="TextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textActive"></a>

```csharp
public string TextActive { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}.

---

##### `TextBackgroundActive`<sup>Optional</sup> <a name="TextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundActive"></a>

```csharp
public string TextBackgroundActive { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}.

---

##### `TextBackgroundHover`<sup>Optional</sup> <a name="TextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundHover"></a>

```csharp
public string TextBackgroundHover { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}.

---

##### `TextHover`<sup>Optional</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textHover"></a>

```csharp
public string TextHover { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeLightPalettePrimary <a name="ConnectWorkspaceThemeLightPalettePrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightPalettePrimary {
    string Active = null,
    string ContrastText = null,
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.active">Active</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#active ConnectWorkspace#active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.contrastText">ContrastText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.active"></a>

```csharp
public string Active { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#active ConnectWorkspace#active}.

---

##### `ContrastText`<sup>Optional</sup> <a name="ContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.contrastText"></a>

```csharp
public string ContrastText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeLightTypography <a name="ConnectWorkspaceThemeLightTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightTypography {
    ConnectWorkspaceThemeLightTypographyFontFamily FontFamily = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.property.fontFamily">FontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}. |

---

##### `FontFamily`<sup>Optional</sup> <a name="FontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.property.fontFamily"></a>

```csharp
public ConnectWorkspaceThemeLightTypographyFontFamily FontFamily { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}.

---

### ConnectWorkspaceThemeLightTypographyFontFamily <a name="ConnectWorkspaceThemeLightTypographyFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightTypographyFontFamily {
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectWorkspaceMediaList <a name="ConnectWorkspaceMediaList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceMediaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get"></a>

```csharp
private ConnectWorkspaceMediaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceMedia[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>[]

---


### ConnectWorkspaceMediaOutputReference <a name="ConnectWorkspaceMediaOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceMediaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceMedia InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>

---


### ConnectWorkspacePagesList <a name="ConnectWorkspacePagesList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspacePagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get"></a>

```csharp
private ConnectWorkspacePagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspacePages[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>[]

---


### ConnectWorkspacePagesOutputReference <a name="ConnectWorkspacePagesOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspacePagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetInputData">ResetInputData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetPage">ResetPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetSlug">ResetSlug</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputData` <a name="ResetInputData" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetInputData"></a>

```csharp
private void ResetInputData()
```

##### `ResetPage` <a name="ResetPage" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetPage"></a>

```csharp
private void ResetPage()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```

##### `ResetSlug` <a name="ResetSlug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetSlug"></a>

```csharp
private void ResetSlug()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputDataInput">InputDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.pageInput">PageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slugInput">SlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputData">InputData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.page">Page</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slug">Slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputDataInput`<sup>Optional</sup> <a name="InputDataInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputDataInput"></a>

```csharp
public string InputDataInput { get; }
```

- *Type:* string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.pageInput"></a>

```csharp
public string PageInput { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `SlugInput`<sup>Optional</sup> <a name="SlugInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slugInput"></a>

```csharp
public string SlugInput { get; }
```

- *Type:* string

---

##### `InputData`<sup>Required</sup> <a name="InputData" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputData"></a>

```csharp
public string InputData { get; }
```

- *Type:* string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.page"></a>

```csharp
public string Page { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slug"></a>

```csharp
public string Slug { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspacePages InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>

---


### ConnectWorkspaceTagsList <a name="ConnectWorkspaceTagsList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get"></a>

```csharp
private ConnectWorkspaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>[]

---


### ConnectWorkspaceTagsOutputReference <a name="ConnectWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>

---


### ConnectWorkspaceThemeDarkOutputReference <a name="ConnectWorkspaceThemeDarkOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette">PutPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography">PutTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetPalette">ResetPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetTypography">ResetTypography</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPalette` <a name="PutPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette"></a>

```csharp
private void PutPalette(ConnectWorkspaceThemeDarkPalette Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

---

##### `PutTypography` <a name="PutTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography"></a>

```csharp
private void PutTypography(ConnectWorkspaceThemeDarkTypography Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

---

##### `ResetPalette` <a name="ResetPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetPalette"></a>

```csharp
private void ResetPalette()
```

##### `ResetTypography` <a name="ResetTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetTypography"></a>

```csharp
private void ResetTypography()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.palette">Palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference">ConnectWorkspaceThemeDarkPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typography">Typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference">ConnectWorkspaceThemeDarkTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.paletteInput">PaletteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typographyInput">TypographyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Palette`<sup>Required</sup> <a name="Palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.palette"></a>

```csharp
public ConnectWorkspaceThemeDarkPaletteOutputReference Palette { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference">ConnectWorkspaceThemeDarkPaletteOutputReference</a>

---

##### `Typography`<sup>Required</sup> <a name="Typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typography"></a>

```csharp
public ConnectWorkspaceThemeDarkTypographyOutputReference Typography { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference">ConnectWorkspaceThemeDarkTypographyOutputReference</a>

---

##### `PaletteInput`<sup>Optional</sup> <a name="PaletteInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.paletteInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkPalette PaletteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

---

##### `TypographyInput`<sup>Optional</sup> <a name="TypographyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typographyInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkTypography TypographyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDark InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

---


### ConnectWorkspaceThemeDarkPaletteCanvasOutputReference <a name="ConnectWorkspaceThemeDarkPaletteCanvasOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkPaletteCanvasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetActiveBackground">ResetActiveBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetContainerBackground">ResetContainerBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetPageBackground">ResetPageBackground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveBackground` <a name="ResetActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetActiveBackground"></a>

```csharp
private void ResetActiveBackground()
```

##### `ResetContainerBackground` <a name="ResetContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetContainerBackground"></a>

```csharp
private void ResetContainerBackground()
```

##### `ResetPageBackground` <a name="ResetPageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetPageBackground"></a>

```csharp
private void ResetPageBackground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackgroundInput">ActiveBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackgroundInput">ContainerBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackgroundInput">PageBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground">ActiveBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground">ContainerBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground">PageBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveBackgroundInput`<sup>Optional</sup> <a name="ActiveBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackgroundInput"></a>

```csharp
public string ActiveBackgroundInput { get; }
```

- *Type:* string

---

##### `ContainerBackgroundInput`<sup>Optional</sup> <a name="ContainerBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackgroundInput"></a>

```csharp
public string ContainerBackgroundInput { get; }
```

- *Type:* string

---

##### `PageBackgroundInput`<sup>Optional</sup> <a name="PageBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackgroundInput"></a>

```csharp
public string PageBackgroundInput { get; }
```

- *Type:* string

---

##### `ActiveBackground`<sup>Required</sup> <a name="ActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground"></a>

```csharp
public string ActiveBackground { get; }
```

- *Type:* string

---

##### `ContainerBackground`<sup>Required</sup> <a name="ContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground"></a>

```csharp
public string ContainerBackground { get; }
```

- *Type:* string

---

##### `PageBackground`<sup>Required</sup> <a name="PageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground"></a>

```csharp
public string PageBackground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkPaletteCanvas InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

---


### ConnectWorkspaceThemeDarkPaletteHeaderOutputReference <a name="ConnectWorkspaceThemeDarkPaletteHeaderOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkPaletteHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetInvertActionsColors">ResetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetTextHover">ResetTextHover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetInvertActionsColors` <a name="ResetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetInvertActionsColors"></a>

```csharp
private void ResetInvertActionsColors()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetTextHover` <a name="ResetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetTextHover"></a>

```csharp
private void ResetTextHover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColorsInput">InvertActionsColorsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHoverInput">TextHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover">TextHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `InvertActionsColorsInput`<sup>Optional</sup> <a name="InvertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColorsInput"></a>

```csharp
public bool|IResolvable InvertActionsColorsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TextHoverInput`<sup>Optional</sup> <a name="TextHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHoverInput"></a>

```csharp
public string TextHoverInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors"></a>

```csharp
public bool|IResolvable InvertActionsColors { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover"></a>

```csharp
public string TextHover { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkPaletteHeader InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

---


### ConnectWorkspaceThemeDarkPaletteNavigationOutputReference <a name="ConnectWorkspaceThemeDarkPaletteNavigationOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkPaletteNavigationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetInvertActionsColors">ResetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextActive">ResetTextActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundActive">ResetTextBackgroundActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundHover">ResetTextBackgroundHover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextHover">ResetTextHover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetInvertActionsColors` <a name="ResetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetInvertActionsColors"></a>

```csharp
private void ResetInvertActionsColors()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetTextActive` <a name="ResetTextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextActive"></a>

```csharp
private void ResetTextActive()
```

##### `ResetTextBackgroundActive` <a name="ResetTextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundActive"></a>

```csharp
private void ResetTextBackgroundActive()
```

##### `ResetTextBackgroundHover` <a name="ResetTextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundHover"></a>

```csharp
private void ResetTextBackgroundHover()
```

##### `ResetTextHover` <a name="ResetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextHover"></a>

```csharp
private void ResetTextHover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColorsInput">InvertActionsColorsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActiveInput">TextActiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActiveInput">TextBackgroundActiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHoverInput">TextBackgroundHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHoverInput">TextHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive">TextActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive">TextBackgroundActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover">TextBackgroundHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover">TextHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `InvertActionsColorsInput`<sup>Optional</sup> <a name="InvertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColorsInput"></a>

```csharp
public bool|IResolvable InvertActionsColorsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TextActiveInput`<sup>Optional</sup> <a name="TextActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActiveInput"></a>

```csharp
public string TextActiveInput { get; }
```

- *Type:* string

---

##### `TextBackgroundActiveInput`<sup>Optional</sup> <a name="TextBackgroundActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActiveInput"></a>

```csharp
public string TextBackgroundActiveInput { get; }
```

- *Type:* string

---

##### `TextBackgroundHoverInput`<sup>Optional</sup> <a name="TextBackgroundHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHoverInput"></a>

```csharp
public string TextBackgroundHoverInput { get; }
```

- *Type:* string

---

##### `TextHoverInput`<sup>Optional</sup> <a name="TextHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHoverInput"></a>

```csharp
public string TextHoverInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors"></a>

```csharp
public bool|IResolvable InvertActionsColors { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextActive`<sup>Required</sup> <a name="TextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive"></a>

```csharp
public string TextActive { get; }
```

- *Type:* string

---

##### `TextBackgroundActive`<sup>Required</sup> <a name="TextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```csharp
public string TextBackgroundActive { get; }
```

- *Type:* string

---

##### `TextBackgroundHover`<sup>Required</sup> <a name="TextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```csharp
public string TextBackgroundHover { get; }
```

- *Type:* string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover"></a>

```csharp
public string TextHover { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkPaletteNavigation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

---


### ConnectWorkspaceThemeDarkPaletteOutputReference <a name="ConnectWorkspaceThemeDarkPaletteOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkPaletteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas">PutCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation">PutNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary">PutPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetCanvas">ResetCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetNavigation">ResetNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCanvas` <a name="PutCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas"></a>

```csharp
private void PutCanvas(ConnectWorkspaceThemeDarkPaletteCanvas Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

---

##### `PutHeader` <a name="PutHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader"></a>

```csharp
private void PutHeader(ConnectWorkspaceThemeDarkPaletteHeader Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

---

##### `PutNavigation` <a name="PutNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation"></a>

```csharp
private void PutNavigation(ConnectWorkspaceThemeDarkPaletteNavigation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

---

##### `PutPrimary` <a name="PutPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary"></a>

```csharp
private void PutPrimary(ConnectWorkspaceThemeDarkPalettePrimary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

---

##### `ResetCanvas` <a name="ResetCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetCanvas"></a>

```csharp
private void ResetCanvas()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetNavigation` <a name="ResetNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetNavigation"></a>

```csharp
private void ResetNavigation()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas">Canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference">ConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference">ConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation">Navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference">ConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference">ConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvasInput">CanvasInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.headerInput">HeaderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigationInput">NavigationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Canvas`<sup>Required</sup> <a name="Canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas"></a>

```csharp
public ConnectWorkspaceThemeDarkPaletteCanvasOutputReference Canvas { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference">ConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.header"></a>

```csharp
public ConnectWorkspaceThemeDarkPaletteHeaderOutputReference Header { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference">ConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a>

---

##### `Navigation`<sup>Required</sup> <a name="Navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation"></a>

```csharp
public ConnectWorkspaceThemeDarkPaletteNavigationOutputReference Navigation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference">ConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primary"></a>

```csharp
public ConnectWorkspaceThemeDarkPalettePrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference">ConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a>

---

##### `CanvasInput`<sup>Optional</sup> <a name="CanvasInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvasInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkPaletteCanvas CanvasInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.headerInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkPaletteHeader HeaderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

---

##### `NavigationInput`<sup>Optional</sup> <a name="NavigationInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigationInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkPaletteNavigation NavigationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primaryInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkPalettePrimary PrimaryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkPalette InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

---


### ConnectWorkspaceThemeDarkPalettePrimaryOutputReference <a name="ConnectWorkspaceThemeDarkPalettePrimaryOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkPalettePrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetContrastText">ResetContrastText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetContrastText` <a name="ResetContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetContrastText"></a>

```csharp
private void ResetContrastText()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.activeInput">ActiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastTextInput">ContrastTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active">Active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText">ContrastText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.activeInput"></a>

```csharp
public string ActiveInput { get; }
```

- *Type:* string

---

##### `ContrastTextInput`<sup>Optional</sup> <a name="ContrastTextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastTextInput"></a>

```csharp
public string ContrastTextInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active"></a>

```csharp
public string Active { get; }
```

- *Type:* string

---

##### `ContrastText`<sup>Required</sup> <a name="ContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText"></a>

```csharp
public string ContrastText { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkPalettePrimary InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

---


### ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference <a name="ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkTypographyFontFamily InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

---


### ConnectWorkspaceThemeDarkTypographyOutputReference <a name="ConnectWorkspaceThemeDarkTypographyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeDarkTypographyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily">PutFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resetFontFamily">ResetFontFamily</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFontFamily` <a name="PutFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily"></a>

```csharp
private void PutFontFamily(ConnectWorkspaceThemeDarkTypographyFontFamily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

---

##### `ResetFontFamily` <a name="ResetFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resetFontFamily"></a>

```csharp
private void ResetFontFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily">FontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamilyInput">FontFamilyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily"></a>

```csharp
public ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference FontFamily { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a>

---

##### `FontFamilyInput`<sup>Optional</sup> <a name="FontFamilyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamilyInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkTypographyFontFamily FontFamilyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDarkTypography InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

---


### ConnectWorkspaceThemeLightOutputReference <a name="ConnectWorkspaceThemeLightOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette">PutPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography">PutTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetPalette">ResetPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetTypography">ResetTypography</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPalette` <a name="PutPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette"></a>

```csharp
private void PutPalette(ConnectWorkspaceThemeLightPalette Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

---

##### `PutTypography` <a name="PutTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography"></a>

```csharp
private void PutTypography(ConnectWorkspaceThemeLightTypography Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

---

##### `ResetPalette` <a name="ResetPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetPalette"></a>

```csharp
private void ResetPalette()
```

##### `ResetTypography` <a name="ResetTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetTypography"></a>

```csharp
private void ResetTypography()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.palette">Palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference">ConnectWorkspaceThemeLightPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typography">Typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference">ConnectWorkspaceThemeLightTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.paletteInput">PaletteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typographyInput">TypographyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Palette`<sup>Required</sup> <a name="Palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.palette"></a>

```csharp
public ConnectWorkspaceThemeLightPaletteOutputReference Palette { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference">ConnectWorkspaceThemeLightPaletteOutputReference</a>

---

##### `Typography`<sup>Required</sup> <a name="Typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typography"></a>

```csharp
public ConnectWorkspaceThemeLightTypographyOutputReference Typography { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference">ConnectWorkspaceThemeLightTypographyOutputReference</a>

---

##### `PaletteInput`<sup>Optional</sup> <a name="PaletteInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.paletteInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightPalette PaletteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

---

##### `TypographyInput`<sup>Optional</sup> <a name="TypographyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typographyInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightTypography TypographyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLight InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

---


### ConnectWorkspaceThemeLightPaletteCanvasOutputReference <a name="ConnectWorkspaceThemeLightPaletteCanvasOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightPaletteCanvasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetActiveBackground">ResetActiveBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetContainerBackground">ResetContainerBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetPageBackground">ResetPageBackground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveBackground` <a name="ResetActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetActiveBackground"></a>

```csharp
private void ResetActiveBackground()
```

##### `ResetContainerBackground` <a name="ResetContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetContainerBackground"></a>

```csharp
private void ResetContainerBackground()
```

##### `ResetPageBackground` <a name="ResetPageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetPageBackground"></a>

```csharp
private void ResetPageBackground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackgroundInput">ActiveBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackgroundInput">ContainerBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackgroundInput">PageBackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground">ActiveBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground">ContainerBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground">PageBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveBackgroundInput`<sup>Optional</sup> <a name="ActiveBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackgroundInput"></a>

```csharp
public string ActiveBackgroundInput { get; }
```

- *Type:* string

---

##### `ContainerBackgroundInput`<sup>Optional</sup> <a name="ContainerBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackgroundInput"></a>

```csharp
public string ContainerBackgroundInput { get; }
```

- *Type:* string

---

##### `PageBackgroundInput`<sup>Optional</sup> <a name="PageBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackgroundInput"></a>

```csharp
public string PageBackgroundInput { get; }
```

- *Type:* string

---

##### `ActiveBackground`<sup>Required</sup> <a name="ActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground"></a>

```csharp
public string ActiveBackground { get; }
```

- *Type:* string

---

##### `ContainerBackground`<sup>Required</sup> <a name="ContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground"></a>

```csharp
public string ContainerBackground { get; }
```

- *Type:* string

---

##### `PageBackground`<sup>Required</sup> <a name="PageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground"></a>

```csharp
public string PageBackground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightPaletteCanvas InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

---


### ConnectWorkspaceThemeLightPaletteHeaderOutputReference <a name="ConnectWorkspaceThemeLightPaletteHeaderOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightPaletteHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetInvertActionsColors">ResetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetTextHover">ResetTextHover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetInvertActionsColors` <a name="ResetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetInvertActionsColors"></a>

```csharp
private void ResetInvertActionsColors()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetTextHover` <a name="ResetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetTextHover"></a>

```csharp
private void ResetTextHover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColorsInput">InvertActionsColorsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHoverInput">TextHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover">TextHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `InvertActionsColorsInput`<sup>Optional</sup> <a name="InvertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColorsInput"></a>

```csharp
public bool|IResolvable InvertActionsColorsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TextHoverInput`<sup>Optional</sup> <a name="TextHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHoverInput"></a>

```csharp
public string TextHoverInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors"></a>

```csharp
public bool|IResolvable InvertActionsColors { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover"></a>

```csharp
public string TextHover { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightPaletteHeader InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

---


### ConnectWorkspaceThemeLightPaletteNavigationOutputReference <a name="ConnectWorkspaceThemeLightPaletteNavigationOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightPaletteNavigationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetInvertActionsColors">ResetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextActive">ResetTextActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundActive">ResetTextBackgroundActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundHover">ResetTextBackgroundHover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextHover">ResetTextHover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetInvertActionsColors` <a name="ResetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetInvertActionsColors"></a>

```csharp
private void ResetInvertActionsColors()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetTextActive` <a name="ResetTextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextActive"></a>

```csharp
private void ResetTextActive()
```

##### `ResetTextBackgroundActive` <a name="ResetTextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundActive"></a>

```csharp
private void ResetTextBackgroundActive()
```

##### `ResetTextBackgroundHover` <a name="ResetTextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundHover"></a>

```csharp
private void ResetTextBackgroundHover()
```

##### `ResetTextHover` <a name="ResetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextHover"></a>

```csharp
private void ResetTextHover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColorsInput">InvertActionsColorsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActiveInput">TextActiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActiveInput">TextBackgroundActiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHoverInput">TextBackgroundHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHoverInput">TextHoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive">TextActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive">TextBackgroundActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover">TextBackgroundHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover">TextHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `InvertActionsColorsInput`<sup>Optional</sup> <a name="InvertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColorsInput"></a>

```csharp
public bool|IResolvable InvertActionsColorsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TextActiveInput`<sup>Optional</sup> <a name="TextActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActiveInput"></a>

```csharp
public string TextActiveInput { get; }
```

- *Type:* string

---

##### `TextBackgroundActiveInput`<sup>Optional</sup> <a name="TextBackgroundActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActiveInput"></a>

```csharp
public string TextBackgroundActiveInput { get; }
```

- *Type:* string

---

##### `TextBackgroundHoverInput`<sup>Optional</sup> <a name="TextBackgroundHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHoverInput"></a>

```csharp
public string TextBackgroundHoverInput { get; }
```

- *Type:* string

---

##### `TextHoverInput`<sup>Optional</sup> <a name="TextHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHoverInput"></a>

```csharp
public string TextHoverInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors"></a>

```csharp
public bool|IResolvable InvertActionsColors { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextActive`<sup>Required</sup> <a name="TextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive"></a>

```csharp
public string TextActive { get; }
```

- *Type:* string

---

##### `TextBackgroundActive`<sup>Required</sup> <a name="TextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```csharp
public string TextBackgroundActive { get; }
```

- *Type:* string

---

##### `TextBackgroundHover`<sup>Required</sup> <a name="TextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```csharp
public string TextBackgroundHover { get; }
```

- *Type:* string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover"></a>

```csharp
public string TextHover { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightPaletteNavigation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

---


### ConnectWorkspaceThemeLightPaletteOutputReference <a name="ConnectWorkspaceThemeLightPaletteOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightPaletteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas">PutCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation">PutNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary">PutPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetCanvas">ResetCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetNavigation">ResetNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCanvas` <a name="PutCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas"></a>

```csharp
private void PutCanvas(ConnectWorkspaceThemeLightPaletteCanvas Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

---

##### `PutHeader` <a name="PutHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader"></a>

```csharp
private void PutHeader(ConnectWorkspaceThemeLightPaletteHeader Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

---

##### `PutNavigation` <a name="PutNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation"></a>

```csharp
private void PutNavigation(ConnectWorkspaceThemeLightPaletteNavigation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

---

##### `PutPrimary` <a name="PutPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary"></a>

```csharp
private void PutPrimary(ConnectWorkspaceThemeLightPalettePrimary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

---

##### `ResetCanvas` <a name="ResetCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetCanvas"></a>

```csharp
private void ResetCanvas()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetNavigation` <a name="ResetNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetNavigation"></a>

```csharp
private void ResetNavigation()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvas">Canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference">ConnectWorkspaceThemeLightPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference">ConnectWorkspaceThemeLightPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigation">Navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference">ConnectWorkspaceThemeLightPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference">ConnectWorkspaceThemeLightPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvasInput">CanvasInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.headerInput">HeaderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigationInput">NavigationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Canvas`<sup>Required</sup> <a name="Canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvas"></a>

```csharp
public ConnectWorkspaceThemeLightPaletteCanvasOutputReference Canvas { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference">ConnectWorkspaceThemeLightPaletteCanvasOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.header"></a>

```csharp
public ConnectWorkspaceThemeLightPaletteHeaderOutputReference Header { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference">ConnectWorkspaceThemeLightPaletteHeaderOutputReference</a>

---

##### `Navigation`<sup>Required</sup> <a name="Navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigation"></a>

```csharp
public ConnectWorkspaceThemeLightPaletteNavigationOutputReference Navigation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference">ConnectWorkspaceThemeLightPaletteNavigationOutputReference</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primary"></a>

```csharp
public ConnectWorkspaceThemeLightPalettePrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference">ConnectWorkspaceThemeLightPalettePrimaryOutputReference</a>

---

##### `CanvasInput`<sup>Optional</sup> <a name="CanvasInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvasInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightPaletteCanvas CanvasInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.headerInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightPaletteHeader HeaderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

---

##### `NavigationInput`<sup>Optional</sup> <a name="NavigationInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigationInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightPaletteNavigation NavigationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primaryInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightPalettePrimary PrimaryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightPalette InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

---


### ConnectWorkspaceThemeLightPalettePrimaryOutputReference <a name="ConnectWorkspaceThemeLightPalettePrimaryOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightPalettePrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetContrastText">ResetContrastText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetContrastText` <a name="ResetContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetContrastText"></a>

```csharp
private void ResetContrastText()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.activeInput">ActiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastTextInput">ContrastTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active">Active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText">ContrastText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.activeInput"></a>

```csharp
public string ActiveInput { get; }
```

- *Type:* string

---

##### `ContrastTextInput`<sup>Optional</sup> <a name="ContrastTextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastTextInput"></a>

```csharp
public string ContrastTextInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active"></a>

```csharp
public string Active { get; }
```

- *Type:* string

---

##### `ContrastText`<sup>Required</sup> <a name="ContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText"></a>

```csharp
public string ContrastText { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightPalettePrimary InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

---


### ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference <a name="ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightTypographyFontFamily InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

---


### ConnectWorkspaceThemeLightTypographyOutputReference <a name="ConnectWorkspaceThemeLightTypographyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeLightTypographyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily">PutFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resetFontFamily">ResetFontFamily</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFontFamily` <a name="PutFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily"></a>

```csharp
private void PutFontFamily(ConnectWorkspaceThemeLightTypographyFontFamily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

---

##### `ResetFontFamily` <a name="ResetFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resetFontFamily"></a>

```csharp
private void ResetFontFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily">FontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamilyInput">FontFamilyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily"></a>

```csharp
public ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference FontFamily { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a>

---

##### `FontFamilyInput`<sup>Optional</sup> <a name="FontFamilyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamilyInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightTypographyFontFamily FontFamilyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLightTypography InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

---


### ConnectWorkspaceThemeOutputReference <a name="ConnectWorkspaceThemeOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectWorkspaceThemeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark">PutDark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight">PutLight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetDark">ResetDark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetLight">ResetLight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDark` <a name="PutDark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark"></a>

```csharp
private void PutDark(ConnectWorkspaceThemeDark Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

---

##### `PutLight` <a name="PutLight" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight"></a>

```csharp
private void PutLight(ConnectWorkspaceThemeLight Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

---

##### `ResetDark` <a name="ResetDark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetDark"></a>

```csharp
private void ResetDark()
```

##### `ResetLight` <a name="ResetLight" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetLight"></a>

```csharp
private void ResetLight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.dark">Dark</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference">ConnectWorkspaceThemeDarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.light">Light</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference">ConnectWorkspaceThemeLightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.darkInput">DarkInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.lightInput">LightInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dark`<sup>Required</sup> <a name="Dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.dark"></a>

```csharp
public ConnectWorkspaceThemeDarkOutputReference Dark { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference">ConnectWorkspaceThemeDarkOutputReference</a>

---

##### `Light`<sup>Required</sup> <a name="Light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.light"></a>

```csharp
public ConnectWorkspaceThemeLightOutputReference Light { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference">ConnectWorkspaceThemeLightOutputReference</a>

---

##### `DarkInput`<sup>Optional</sup> <a name="DarkInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.darkInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeDark DarkInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

---

##### `LightInput`<sup>Optional</sup> <a name="LightInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.lightInput"></a>

```csharp
public IResolvable|ConnectWorkspaceThemeLight LightInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectWorkspaceTheme InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

---



