# `apigatewayv2PortalProduct` Submodule <a name="`apigatewayv2PortalProduct` Submodule" id="@cdktn/provider-awscc.apigatewayv2PortalProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2PortalProduct <a name="Apigatewayv2PortalProduct" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_portal_product awscc_apigatewayv2_portal_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2PortalProduct(Construct Scope, string Id, Apigatewayv2PortalProductConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig">Apigatewayv2PortalProductConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig">Apigatewayv2PortalProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.putTags"></a>

```csharp
private void PutTags(IResolvable|Apigatewayv2PortalProductTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags">Apigatewayv2PortalProductTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2PortalProduct resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2PortalProduct.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2PortalProduct.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2PortalProduct.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2PortalProduct.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Apigatewayv2PortalProduct resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2PortalProduct to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2PortalProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_portal_product#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2PortalProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.portalProductArn">PortalProductArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.portalProductId">PortalProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList">Apigatewayv2PortalProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags">Apigatewayv2PortalProductTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `PortalProductArn`<sup>Required</sup> <a name="PortalProductArn" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.portalProductArn"></a>

```csharp
public string PortalProductArn { get; }
```

- *Type:* string

---

##### `PortalProductId`<sup>Required</sup> <a name="PortalProductId" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.portalProductId"></a>

```csharp
public string PortalProductId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.tags"></a>

```csharp
public Apigatewayv2PortalProductTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList">Apigatewayv2PortalProductTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.tagsInput"></a>

```csharp
public IResolvable|Apigatewayv2PortalProductTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags">Apigatewayv2PortalProductTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProduct.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2PortalProductConfig <a name="Apigatewayv2PortalProductConfig" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2PortalProductConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Description = null,
    IResolvable|Apigatewayv2PortalProductTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The name of the portal product as it appears in a published portal. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.description">Description</a></code> | <code>string</code> | A description of the portal product. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags">Apigatewayv2PortalProductTags</a>[]</code> | The collection of tags associated with the portal product. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name of the portal product as it appears in a published portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_portal_product#display_name Apigatewayv2PortalProduct#display_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the portal product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_portal_product#description Apigatewayv2PortalProduct#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductConfig.property.tags"></a>

```csharp
public IResolvable|Apigatewayv2PortalProductTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags">Apigatewayv2PortalProductTags</a>[]

The collection of tags associated with the portal product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_portal_product#tags Apigatewayv2PortalProduct#tags}

---

### Apigatewayv2PortalProductTags <a name="Apigatewayv2PortalProductTags" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2PortalProductTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_portal_product#key Apigatewayv2PortalProduct#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_portal_product#value Apigatewayv2PortalProduct#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2PortalProductTagsList <a name="Apigatewayv2PortalProductTagsList" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2PortalProductTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.get"></a>

```csharp
private Apigatewayv2PortalProductTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags">Apigatewayv2PortalProductTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsList.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2PortalProductTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags">Apigatewayv2PortalProductTags</a>[]

---


### Apigatewayv2PortalProductTagsOutputReference <a name="Apigatewayv2PortalProductTagsOutputReference" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2PortalProductTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags">Apigatewayv2PortalProductTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2PortalProductTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2PortalProduct.Apigatewayv2PortalProductTags">Apigatewayv2PortalProductTags</a>

---



