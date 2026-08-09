# `refactorspacesRoute` Submodule <a name="`refactorspacesRoute` Submodule" id="@cdktn/provider-awscc.refactorspacesRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RefactorspacesRoute <a name="RefactorspacesRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route awscc_refactorspaces_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesRoute(Construct Scope, string Id, RefactorspacesRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig">RefactorspacesRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig">RefactorspacesRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putDefaultRoute">PutDefaultRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute">PutUriPathRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetDefaultRoute">ResetDefaultRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetUriPathRoute">ResetUriPathRoute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultRoute` <a name="PutDefaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putDefaultRoute"></a>

```csharp
private void PutDefaultRoute(RefactorspacesRouteDefaultRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putDefaultRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putTags"></a>

```csharp
private void PutTags(IResolvable|RefactorspacesRouteTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]

---

##### `PutUriPathRoute` <a name="PutUriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute"></a>

```csharp
private void PutUriPathRoute(RefactorspacesRouteUriPathRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

---

##### `ResetDefaultRoute` <a name="ResetDefaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetDefaultRoute"></a>

```csharp
private void ResetDefaultRoute()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUriPathRoute` <a name="ResetUriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetUriPathRoute"></a>

```csharp
private void ResetUriPathRoute()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RefactorspacesRoute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RefactorspacesRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RefactorspacesRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RefactorspacesRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RefactorspacesRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RefactorspacesRoute resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RefactorspacesRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RefactorspacesRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RefactorspacesRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRoute">DefaultRoute</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference">RefactorspacesRouteDefaultRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.pathResourceToId">PathResourceToId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeIdentifier">RouteIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList">RefactorspacesRouteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRoute">UriPathRoute</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference">RefactorspacesRouteUriPathRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifierInput">ApplicationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRouteInput">DefaultRouteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifierInput">EnvironmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeTypeInput">RouteTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifierInput">ServiceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRouteInput">UriPathRouteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeType">RouteType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultRoute`<sup>Required</sup> <a name="DefaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRoute"></a>

```csharp
public RefactorspacesRouteDefaultRouteOutputReference DefaultRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference">RefactorspacesRouteDefaultRouteOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PathResourceToId`<sup>Required</sup> <a name="PathResourceToId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.pathResourceToId"></a>

```csharp
public string PathResourceToId { get; }
```

- *Type:* string

---

##### `RouteIdentifier`<sup>Required</sup> <a name="RouteIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeIdentifier"></a>

```csharp
public string RouteIdentifier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tags"></a>

```csharp
public RefactorspacesRouteTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList">RefactorspacesRouteTagsList</a>

---

##### `UriPathRoute`<sup>Required</sup> <a name="UriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRoute"></a>

```csharp
public RefactorspacesRouteUriPathRouteOutputReference UriPathRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference">RefactorspacesRouteUriPathRouteOutputReference</a>

---

##### `ApplicationIdentifierInput`<sup>Optional</sup> <a name="ApplicationIdentifierInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifierInput"></a>

```csharp
public string ApplicationIdentifierInput { get; }
```

- *Type:* string

---

##### `DefaultRouteInput`<sup>Optional</sup> <a name="DefaultRouteInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRouteInput"></a>

```csharp
public IResolvable|RefactorspacesRouteDefaultRoute DefaultRouteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

---

##### `EnvironmentIdentifierInput`<sup>Optional</sup> <a name="EnvironmentIdentifierInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifierInput"></a>

```csharp
public string EnvironmentIdentifierInput { get; }
```

- *Type:* string

---

##### `RouteTypeInput`<sup>Optional</sup> <a name="RouteTypeInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeTypeInput"></a>

```csharp
public string RouteTypeInput { get; }
```

- *Type:* string

---

##### `ServiceIdentifierInput`<sup>Optional</sup> <a name="ServiceIdentifierInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifierInput"></a>

```csharp
public string ServiceIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tagsInput"></a>

```csharp
public IResolvable|RefactorspacesRouteTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]

---

##### `UriPathRouteInput`<sup>Optional</sup> <a name="UriPathRouteInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRouteInput"></a>

```csharp
public IResolvable|RefactorspacesRouteUriPathRoute UriPathRouteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifier"></a>

```csharp
public string ApplicationIdentifier { get; }
```

- *Type:* string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; }
```

- *Type:* string

---

##### `RouteType`<sup>Required</sup> <a name="RouteType" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeType"></a>

```csharp
public string RouteType { get; }
```

- *Type:* string

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RefactorspacesRouteConfig <a name="RefactorspacesRouteConfig" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesRouteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationIdentifier,
    string EnvironmentIdentifier,
    string RouteType,
    string ServiceIdentifier,
    RefactorspacesRouteDefaultRoute DefaultRoute = null,
    IResolvable|RefactorspacesRouteTags[] Tags = null,
    RefactorspacesRouteUriPathRoute UriPathRoute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#application_identifier RefactorspacesRoute#application_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#environment_identifier RefactorspacesRoute#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.routeType">RouteType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#route_type RefactorspacesRoute#route_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#service_identifier RefactorspacesRoute#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.defaultRoute">DefaultRoute</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#default_route RefactorspacesRoute#default_route}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.uriPathRoute">UriPathRoute</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#uri_path_route RefactorspacesRoute#uri_path_route}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.applicationIdentifier"></a>

```csharp
public string ApplicationIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#application_identifier RefactorspacesRoute#application_identifier}.

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#environment_identifier RefactorspacesRoute#environment_identifier}.

---

##### `RouteType`<sup>Required</sup> <a name="RouteType" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.routeType"></a>

```csharp
public string RouteType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#route_type RefactorspacesRoute#route_type}.

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#service_identifier RefactorspacesRoute#service_identifier}.

---

##### `DefaultRoute`<sup>Optional</sup> <a name="DefaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.defaultRoute"></a>

```csharp
public RefactorspacesRouteDefaultRoute DefaultRoute { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#default_route RefactorspacesRoute#default_route}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.tags"></a>

```csharp
public IResolvable|RefactorspacesRouteTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#tags RefactorspacesRoute#tags}

---

##### `UriPathRoute`<sup>Optional</sup> <a name="UriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.uriPathRoute"></a>

```csharp
public RefactorspacesRouteUriPathRoute UriPathRoute { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#uri_path_route RefactorspacesRoute#uri_path_route}.

---

### RefactorspacesRouteDefaultRoute <a name="RefactorspacesRouteDefaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesRouteDefaultRoute {
    string ActivationState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute.property.activationState">ActivationState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}. |

---

##### `ActivationState`<sup>Optional</sup> <a name="ActivationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute.property.activationState"></a>

```csharp
public string ActivationState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}.

---

### RefactorspacesRouteTags <a name="RefactorspacesRouteTags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesRouteTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.key">Key</a></code> | <code>string</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.value">Value</a></code> | <code>string</code> | A string containing the value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#key RefactorspacesRoute#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#value RefactorspacesRoute#value}

---

### RefactorspacesRouteUriPathRoute <a name="RefactorspacesRouteUriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesRouteUriPathRoute {
    string ActivationState = null,
    bool|IResolvable AppendSourcePath = null,
    bool|IResolvable IncludeChildPaths = null,
    string[] Methods = null,
    string SourcePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.activationState">ActivationState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.appendSourcePath">AppendSourcePath</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#append_source_path RefactorspacesRoute#append_source_path}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.includeChildPaths">IncludeChildPaths</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#include_child_paths RefactorspacesRoute#include_child_paths}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.methods">Methods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#methods RefactorspacesRoute#methods}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.sourcePath">SourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#source_path RefactorspacesRoute#source_path}. |

---

##### `ActivationState`<sup>Optional</sup> <a name="ActivationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.activationState"></a>

```csharp
public string ActivationState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}.

---

##### `AppendSourcePath`<sup>Optional</sup> <a name="AppendSourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.appendSourcePath"></a>

```csharp
public bool|IResolvable AppendSourcePath { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#append_source_path RefactorspacesRoute#append_source_path}.

---

##### `IncludeChildPaths`<sup>Optional</sup> <a name="IncludeChildPaths" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.includeChildPaths"></a>

```csharp
public bool|IResolvable IncludeChildPaths { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#include_child_paths RefactorspacesRoute#include_child_paths}.

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.methods"></a>

```csharp
public string[] Methods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#methods RefactorspacesRoute#methods}.

---

##### `SourcePath`<sup>Optional</sup> <a name="SourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.sourcePath"></a>

```csharp
public string SourcePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_route#source_path RefactorspacesRoute#source_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### RefactorspacesRouteDefaultRouteOutputReference <a name="RefactorspacesRouteDefaultRouteOutputReference" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesRouteDefaultRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resetActivationState">ResetActivationState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActivationState` <a name="ResetActivationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resetActivationState"></a>

```csharp
private void ResetActivationState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationStateInput">ActivationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationState">ActivationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivationStateInput`<sup>Optional</sup> <a name="ActivationStateInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationStateInput"></a>

```csharp
public string ActivationStateInput { get; }
```

- *Type:* string

---

##### `ActivationState`<sup>Required</sup> <a name="ActivationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationState"></a>

```csharp
public string ActivationState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RefactorspacesRouteDefaultRoute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

---


### RefactorspacesRouteTagsList <a name="RefactorspacesRouteTagsList" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesRouteTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.get"></a>

```csharp
private RefactorspacesRouteTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.internalValue"></a>

```csharp
public IResolvable|RefactorspacesRouteTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]

---


### RefactorspacesRouteTagsOutputReference <a name="RefactorspacesRouteTagsOutputReference" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesRouteTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RefactorspacesRouteTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>

---


### RefactorspacesRouteUriPathRouteOutputReference <a name="RefactorspacesRouteUriPathRouteOutputReference" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesRouteUriPathRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetActivationState">ResetActivationState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetAppendSourcePath">ResetAppendSourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetIncludeChildPaths">ResetIncludeChildPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetSourcePath">ResetSourcePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActivationState` <a name="ResetActivationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetActivationState"></a>

```csharp
private void ResetActivationState()
```

##### `ResetAppendSourcePath` <a name="ResetAppendSourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetAppendSourcePath"></a>

```csharp
private void ResetAppendSourcePath()
```

##### `ResetIncludeChildPaths` <a name="ResetIncludeChildPaths" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetIncludeChildPaths"></a>

```csharp
private void ResetIncludeChildPaths()
```

##### `ResetMethods` <a name="ResetMethods" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetMethods"></a>

```csharp
private void ResetMethods()
```

##### `ResetSourcePath` <a name="ResetSourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetSourcePath"></a>

```csharp
private void ResetSourcePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationStateInput">ActivationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePathInput">AppendSourcePathInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPathsInput">IncludeChildPathsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methodsInput">MethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePathInput">SourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationState">ActivationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePath">AppendSourcePath</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPaths">IncludeChildPaths</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methods">Methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePath">SourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivationStateInput`<sup>Optional</sup> <a name="ActivationStateInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationStateInput"></a>

```csharp
public string ActivationStateInput { get; }
```

- *Type:* string

---

##### `AppendSourcePathInput`<sup>Optional</sup> <a name="AppendSourcePathInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePathInput"></a>

```csharp
public bool|IResolvable AppendSourcePathInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildPathsInput`<sup>Optional</sup> <a name="IncludeChildPathsInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPathsInput"></a>

```csharp
public bool|IResolvable IncludeChildPathsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methodsInput"></a>

```csharp
public string[] MethodsInput { get; }
```

- *Type:* string[]

---

##### `SourcePathInput`<sup>Optional</sup> <a name="SourcePathInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePathInput"></a>

```csharp
public string SourcePathInput { get; }
```

- *Type:* string

---

##### `ActivationState`<sup>Required</sup> <a name="ActivationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationState"></a>

```csharp
public string ActivationState { get; }
```

- *Type:* string

---

##### `AppendSourcePath`<sup>Required</sup> <a name="AppendSourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePath"></a>

```csharp
public bool|IResolvable AppendSourcePath { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildPaths`<sup>Required</sup> <a name="IncludeChildPaths" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPaths"></a>

```csharp
public bool|IResolvable IncludeChildPaths { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methods"></a>

```csharp
public string[] Methods { get; }
```

- *Type:* string[]

---

##### `SourcePath`<sup>Required</sup> <a name="SourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePath"></a>

```csharp
public string SourcePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RefactorspacesRouteUriPathRoute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

---



