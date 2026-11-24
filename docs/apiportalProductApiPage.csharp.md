# `apiportalProductApiPage` Submodule <a name="`apiportalProductApiPage` Submodule" id="@cdktn/provider-awscc.apiportalProductApiPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalProductApiPage <a name="ApiportalProductApiPage" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page awscc_apiportal_product_api_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPage(Construct Scope, string Id, ApiportalProductApiPageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig">ApiportalProductApiPageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig">ApiportalProductApiPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent">PutDisplayContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetDisplayContent">ResetDisplayContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetManagedApiId">ResetManagedApiId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTryItState">ResetTryItState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisplayContent` <a name="PutDisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent"></a>

```csharp
private void PutDisplayContent(ApiportalProductApiPageDisplayContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags"></a>

```csharp
private void PutTags(IResolvable|ApiportalProductApiPageTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>[]

---

##### `ResetDisplayContent` <a name="ResetDisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetDisplayContent"></a>

```csharp
private void ResetDisplayContent()
```

##### `ResetManagedApiId` <a name="ResetManagedApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetManagedApiId"></a>

```csharp
private void ResetManagedApiId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTryItState` <a name="ResetTryItState" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTryItState"></a>

```csharp
private void ResetTryItState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalProductApiPage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalProductApiPage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalProductApiPage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalProductApiPage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalProductApiPage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiportalProductApiPage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiportalProductApiPage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiportalProductApiPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalProductApiPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.apiId">ApiId</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference">ApiportalProductApiPageApiIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContent">DisplayContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference">ApiportalProductApiPageDisplayContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageArn">ProductApiPageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageId">ProductApiPageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.statusException">StatusException</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference">ApiportalProductApiPageStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList">ApiportalProductApiPageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContentInput">DisplayContentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiIdInput">ManagedApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItStateInput">TryItStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiId">ManagedApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItState">TryItState</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.apiId"></a>

```csharp
public ApiportalProductApiPageApiIdOutputReference ApiId { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference">ApiportalProductApiPageApiIdOutputReference</a>

---

##### `DisplayContent`<sup>Required</sup> <a name="DisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContent"></a>

```csharp
public ApiportalProductApiPageDisplayContentOutputReference DisplayContent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference">ApiportalProductApiPageDisplayContentOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProductApiPageArn`<sup>Required</sup> <a name="ProductApiPageArn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageArn"></a>

```csharp
public string ProductApiPageArn { get; }
```

- *Type:* string

---

##### `ProductApiPageId`<sup>Required</sup> <a name="ProductApiPageId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageId"></a>

```csharp
public string ProductApiPageId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusException`<sup>Required</sup> <a name="StatusException" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.statusException"></a>

```csharp
public ApiportalProductApiPageStatusExceptionOutputReference StatusException { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference">ApiportalProductApiPageStatusExceptionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tags"></a>

```csharp
public ApiportalProductApiPageTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList">ApiportalProductApiPageTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DisplayContentInput`<sup>Optional</sup> <a name="DisplayContentInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContentInput"></a>

```csharp
public IResolvable|ApiportalProductApiPageDisplayContent DisplayContentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

---

##### `ManagedApiIdInput`<sup>Optional</sup> <a name="ManagedApiIdInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiIdInput"></a>

```csharp
public string ManagedApiIdInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tagsInput"></a>

```csharp
public IResolvable|ApiportalProductApiPageTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>[]

---

##### `TryItStateInput`<sup>Optional</sup> <a name="TryItStateInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItStateInput"></a>

```csharp
public string TryItStateInput { get; }
```

- *Type:* string

---

##### `ManagedApiId`<sup>Required</sup> <a name="ManagedApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiId"></a>

```csharp
public string ManagedApiId { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `TryItState`<sup>Required</sup> <a name="TryItState" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItState"></a>

```csharp
public string TryItState { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalProductApiPageApiId <a name="ApiportalProductApiPageApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageApiId {

};
```


### ApiportalProductApiPageApiIdIdentifierParts <a name="ApiportalProductApiPageApiIdIdentifierParts" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageApiIdIdentifierParts {

};
```


### ApiportalProductApiPageConfig <a name="ApiportalProductApiPageConfig" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ProductId,
    ApiportalProductApiPageDisplayContent DisplayContent = null,
    string ManagedApiId = null,
    IResolvable|ApiportalProductApiPageTags[] Tags = null,
    string TryItState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.productId">ProductId</a></code> | <code>string</code> | The identifier of the parent Product. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.displayContent">DisplayContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.managedApiId">ManagedApiId</a></code> | <code>string</code> | Identifier of the Managed API this page documents. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>[]</code> | The tags associated with the product API page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tryItState">TryItState</a></code> | <code>string</code> | Whether the interactive TryIt UI is enabled for this API. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

The identifier of the parent Product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#product_id ApiportalProductApiPage#product_id}

---

##### `DisplayContent`<sup>Optional</sup> <a name="DisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.displayContent"></a>

```csharp
public ApiportalProductApiPageDisplayContent DisplayContent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#display_content ApiportalProductApiPage#display_content}

---

##### `ManagedApiId`<sup>Optional</sup> <a name="ManagedApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.managedApiId"></a>

```csharp
public string ManagedApiId { get; set; }
```

- *Type:* string

Identifier of the Managed API this page documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#managed_api_id ApiportalProductApiPage#managed_api_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tags"></a>

```csharp
public IResolvable|ApiportalProductApiPageTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>[]

The tags associated with the product API page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#tags ApiportalProductApiPage#tags}

---

##### `TryItState`<sup>Optional</sup> <a name="TryItState" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tryItState"></a>

```csharp
public string TryItState { get; set; }
```

- *Type:* string

Whether the interactive TryIt UI is enabled for this API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#try_it_state ApiportalProductApiPage#try_it_state}

---

### ApiportalProductApiPageDisplayContent <a name="ApiportalProductApiPageDisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageDisplayContent {
    string None = null,
    ApiportalProductApiPageDisplayContentOverrides Overrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.none">None</a></code> | <code>string</code> | Marker selecting the default service-rendered content with no overrides. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a></code> | Customer-supplied overrides for the service-rendered API documentation. |

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.none"></a>

```csharp
public string None { get; set; }
```

- *Type:* string

Marker selecting the default service-rendered content with no overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#none ApiportalProductApiPage#none}

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.overrides"></a>

```csharp
public ApiportalProductApiPageDisplayContentOverrides Overrides { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

Customer-supplied overrides for the service-rendered API documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#overrides ApiportalProductApiPage#overrides}

---

### ApiportalProductApiPageDisplayContentOverrides <a name="ApiportalProductApiPageDisplayContentOverrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageDisplayContentOverrides {
    string ApiUrl = null,
    string Body = null,
    string OperationName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.apiUrl">ApiUrl</a></code> | <code>string</code> | Override for the API URL. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.body">Body</a></code> | <code>string</code> | Override for the documentation body. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.operationName">OperationName</a></code> | <code>string</code> | Override for the operation name. |

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.apiUrl"></a>

```csharp
public string ApiUrl { get; set; }
```

- *Type:* string

Override for the API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#api_url ApiportalProductApiPage#api_url}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Override for the documentation body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#body ApiportalProductApiPage#body}

---

##### `OperationName`<sup>Optional</sup> <a name="OperationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.operationName"></a>

```csharp
public string OperationName { get; set; }
```

- *Type:* string

Override for the operation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#operation_name ApiportalProductApiPage#operation_name}

---

### ApiportalProductApiPageStatusException <a name="ApiportalProductApiPageStatusException" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageStatusException {

};
```


### ApiportalProductApiPageTags <a name="ApiportalProductApiPageTags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#key ApiportalProductApiPage#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#value ApiportalProductApiPage#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#key ApiportalProductApiPage#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#value ApiportalProductApiPage#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalProductApiPageApiIdIdentifierPartsOutputReference <a name="ApiportalProductApiPageApiIdIdentifierPartsOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageApiIdIdentifierPartsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts">ApiportalProductApiPageApiIdIdentifierParts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue"></a>

```csharp
public ApiportalProductApiPageApiIdIdentifierParts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts">ApiportalProductApiPageApiIdIdentifierParts</a>

---


### ApiportalProductApiPageApiIdOutputReference <a name="ApiportalProductApiPageApiIdOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageApiIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.identifierParts">IdentifierParts</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference">ApiportalProductApiPageApiIdIdentifierPartsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId">ApiportalProductApiPageApiId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierParts`<sup>Required</sup> <a name="IdentifierParts" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.identifierParts"></a>

```csharp
public ApiportalProductApiPageApiIdIdentifierPartsOutputReference IdentifierParts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference">ApiportalProductApiPageApiIdIdentifierPartsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.internalValue"></a>

```csharp
public ApiportalProductApiPageApiId InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId">ApiportalProductApiPageApiId</a>

---


### ApiportalProductApiPageDisplayContentOutputReference <a name="ApiportalProductApiPageDisplayContentOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageDisplayContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetNone">ResetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverrides` <a name="PutOverrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides"></a>

```csharp
private void PutOverrides(ApiportalProductApiPageDisplayContentOverrides Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

---

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetNone"></a>

```csharp
private void ResetNone()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetOverrides"></a>

```csharp
private void ResetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference">ApiportalProductApiPageDisplayContentOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.noneInput">NoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overridesInput">OverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.none">None</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overrides"></a>

```csharp
public ApiportalProductApiPageDisplayContentOverridesOutputReference Overrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference">ApiportalProductApiPageDisplayContentOverridesOutputReference</a>

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.noneInput"></a>

```csharp
public string NoneInput { get; }
```

- *Type:* string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overridesInput"></a>

```csharp
public IResolvable|ApiportalProductApiPageDisplayContentOverrides OverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.none"></a>

```csharp
public string None { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalProductApiPageDisplayContent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

---


### ApiportalProductApiPageDisplayContentOverridesOutputReference <a name="ApiportalProductApiPageDisplayContentOverridesOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageDisplayContentOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetOperationName">ResetOperationName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetApiUrl"></a>

```csharp
private void ResetApiUrl()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetOperationName` <a name="ResetOperationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetOperationName"></a>

```csharp
private void ResetOperationName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrlInput">ApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationNameInput">OperationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrlInput"></a>

```csharp
public string ApiUrlInput { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `OperationNameInput`<sup>Optional</sup> <a name="OperationNameInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationNameInput"></a>

```csharp
public string OperationNameInput { get; }
```

- *Type:* string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalProductApiPageDisplayContentOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

---


### ApiportalProductApiPageStatusExceptionOutputReference <a name="ApiportalProductApiPageStatusExceptionOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageStatusExceptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.exception">Exception</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException">ApiportalProductApiPageStatusException</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exception`<sup>Required</sup> <a name="Exception" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.exception"></a>

```csharp
public string Exception { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.internalValue"></a>

```csharp
public ApiportalProductApiPageStatusException InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException">ApiportalProductApiPageStatusException</a>

---


### ApiportalProductApiPageTagsList <a name="ApiportalProductApiPageTagsList" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get"></a>

```csharp
private ApiportalProductApiPageTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApiportalProductApiPageTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>[]

---


### ApiportalProductApiPageTagsOutputReference <a name="ApiportalProductApiPageTagsOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalProductApiPageTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalProductApiPageTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>

---



