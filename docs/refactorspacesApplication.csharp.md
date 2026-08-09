# `refactorspacesApplication` Submodule <a name="`refactorspacesApplication` Submodule" id="@cdktn/provider-awscc.refactorspacesApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RefactorspacesApplication <a name="RefactorspacesApplication" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application awscc_refactorspaces_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesApplication(Construct Scope, string Id, RefactorspacesApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig">RefactorspacesApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig">RefactorspacesApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putApiGatewayProxy">PutApiGatewayProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetApiGatewayProxy">ResetApiGatewayProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApiGatewayProxy` <a name="PutApiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putApiGatewayProxy"></a>

```csharp
private void PutApiGatewayProxy(RefactorspacesApplicationApiGatewayProxy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putApiGatewayProxy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putTags"></a>

```csharp
private void PutTags(IResolvable|RefactorspacesApplicationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>[]

---

##### `ResetApiGatewayProxy` <a name="ResetApiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetApiGatewayProxy"></a>

```csharp
private void ResetApiGatewayProxy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RefactorspacesApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RefactorspacesApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RefactorspacesApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RefactorspacesApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RefactorspacesApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RefactorspacesApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RefactorspacesApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RefactorspacesApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RefactorspacesApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayId">ApiGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxy">ApiGatewayProxy</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference">RefactorspacesApplicationApiGatewayProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbArn">NlbArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbName">NlbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyUrl">ProxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList">RefactorspacesApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcLinkId">VpcLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxyInput">ApiGatewayProxyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifierInput">EnvironmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyTypeInput">ProxyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyType">ProxyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiGatewayId`<sup>Required</sup> <a name="ApiGatewayId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayId"></a>

```csharp
public string ApiGatewayId { get; }
```

- *Type:* string

---

##### `ApiGatewayProxy`<sup>Required</sup> <a name="ApiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxy"></a>

```csharp
public RefactorspacesApplicationApiGatewayProxyOutputReference ApiGatewayProxy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference">RefactorspacesApplicationApiGatewayProxyOutputReference</a>

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.applicationIdentifier"></a>

```csharp
public string ApplicationIdentifier { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NlbArn`<sup>Required</sup> <a name="NlbArn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbArn"></a>

```csharp
public string NlbArn { get; }
```

- *Type:* string

---

##### `NlbName`<sup>Required</sup> <a name="NlbName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbName"></a>

```csharp
public string NlbName { get; }
```

- *Type:* string

---

##### `ProxyUrl`<sup>Required</sup> <a name="ProxyUrl" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyUrl"></a>

```csharp
public string ProxyUrl { get; }
```

- *Type:* string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tags"></a>

```csharp
public RefactorspacesApplicationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList">RefactorspacesApplicationTagsList</a>

---

##### `VpcLinkId`<sup>Required</sup> <a name="VpcLinkId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcLinkId"></a>

```csharp
public string VpcLinkId { get; }
```

- *Type:* string

---

##### `ApiGatewayProxyInput`<sup>Optional</sup> <a name="ApiGatewayProxyInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxyInput"></a>

```csharp
public IResolvable|RefactorspacesApplicationApiGatewayProxy ApiGatewayProxyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

---

##### `EnvironmentIdentifierInput`<sup>Optional</sup> <a name="EnvironmentIdentifierInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifierInput"></a>

```csharp
public string EnvironmentIdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProxyTypeInput`<sup>Optional</sup> <a name="ProxyTypeInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyTypeInput"></a>

```csharp
public string ProxyTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tagsInput"></a>

```csharp
public IResolvable|RefactorspacesApplicationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProxyType`<sup>Required</sup> <a name="ProxyType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyType"></a>

```csharp
public string ProxyType { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RefactorspacesApplicationApiGatewayProxy <a name="RefactorspacesApplicationApiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesApplicationApiGatewayProxy {
    string EndpointType = null,
    string StageName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#endpoint_type RefactorspacesApplication#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.stageName">StageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#stage_name RefactorspacesApplication#stage_name}. |

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#endpoint_type RefactorspacesApplication#endpoint_type}.

---

##### `StageName`<sup>Optional</sup> <a name="StageName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.stageName"></a>

```csharp
public string StageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#stage_name RefactorspacesApplication#stage_name}.

---

### RefactorspacesApplicationConfig <a name="RefactorspacesApplicationConfig" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EnvironmentIdentifier,
    string Name,
    string ProxyType,
    string VpcId,
    RefactorspacesApplicationApiGatewayProxy ApiGatewayProxy = null,
    IResolvable|RefactorspacesApplicationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#environment_identifier RefactorspacesApplication#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#name RefactorspacesApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.proxyType">ProxyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#proxy_type RefactorspacesApplication#proxy_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#vpc_id RefactorspacesApplication#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.apiGatewayProxy">ApiGatewayProxy</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#api_gateway_proxy RefactorspacesApplication#api_gateway_proxy}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>[]</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#environment_identifier RefactorspacesApplication#environment_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#name RefactorspacesApplication#name}.

---

##### `ProxyType`<sup>Required</sup> <a name="ProxyType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.proxyType"></a>

```csharp
public string ProxyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#proxy_type RefactorspacesApplication#proxy_type}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#vpc_id RefactorspacesApplication#vpc_id}.

---

##### `ApiGatewayProxy`<sup>Optional</sup> <a name="ApiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.apiGatewayProxy"></a>

```csharp
public RefactorspacesApplicationApiGatewayProxy ApiGatewayProxy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#api_gateway_proxy RefactorspacesApplication#api_gateway_proxy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.tags"></a>

```csharp
public IResolvable|RefactorspacesApplicationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>[]

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#tags RefactorspacesApplication#tags}

---

### RefactorspacesApplicationTags <a name="RefactorspacesApplicationTags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesApplicationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.key">Key</a></code> | <code>string</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.value">Value</a></code> | <code>string</code> | A string containing the value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#key RefactorspacesApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#value RefactorspacesApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RefactorspacesApplicationApiGatewayProxyOutputReference <a name="RefactorspacesApplicationApiGatewayProxyOutputReference" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesApplicationApiGatewayProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetEndpointType">ResetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetStageName">ResetStageName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetEndpointType"></a>

```csharp
private void ResetEndpointType()
```

##### `ResetStageName` <a name="ResetStageName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetStageName"></a>

```csharp
private void ResetStageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageNameInput">StageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageNameInput"></a>

```csharp
public string StageNameInput { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RefactorspacesApplicationApiGatewayProxy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

---


### RefactorspacesApplicationTagsList <a name="RefactorspacesApplicationTagsList" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesApplicationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.get"></a>

```csharp
private RefactorspacesApplicationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.internalValue"></a>

```csharp
public IResolvable|RefactorspacesApplicationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>[]

---


### RefactorspacesApplicationTagsOutputReference <a name="RefactorspacesApplicationTagsOutputReference" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RefactorspacesApplicationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RefactorspacesApplicationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>

---



