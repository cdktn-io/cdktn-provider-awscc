# `apigatewayv2Route` Submodule <a name="`apigatewayv2Route` Submodule" id="@cdktn/provider-awscc.apigatewayv2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Route <a name="Apigatewayv2Route" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route awscc_apigatewayv2_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2Route(Construct Scope, string Id, Apigatewayv2RouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig">Apigatewayv2RouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig">Apigatewayv2RouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired">ResetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes">ResetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression">ResetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOperationName">ResetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestModels">ResetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestParameters">ResetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression">ResetRouteResponseSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApiKeyRequired` <a name="ResetApiKeyRequired" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired"></a>

```csharp
private void ResetApiKeyRequired()
```

##### `ResetAuthorizationScopes` <a name="ResetAuthorizationScopes" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes"></a>

```csharp
private void ResetAuthorizationScopes()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType"></a>

```csharp
private void ResetAuthorizationType()
```

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId"></a>

```csharp
private void ResetAuthorizerId()
```

##### `ResetModelSelectionExpression` <a name="ResetModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression"></a>

```csharp
private void ResetModelSelectionExpression()
```

##### `ResetOperationName` <a name="ResetOperationName" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOperationName"></a>

```csharp
private void ResetOperationName()
```

##### `ResetRequestModels` <a name="ResetRequestModels" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestModels"></a>

```csharp
private void ResetRequestModels()
```

##### `ResetRequestParameters` <a name="ResetRequestParameters" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestParameters"></a>

```csharp
private void ResetRequestParameters()
```

##### `ResetRouteResponseSelectionExpression` <a name="ResetRouteResponseSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression"></a>

```csharp
private void ResetRouteResponseSelectionExpression()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetTarget"></a>

```csharp
private void ResetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Route resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Route.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Route.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Route.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Route.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Apigatewayv2Route resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2Route to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2Route that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Route to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeId">RouteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput">ApiKeyRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput">AuthorizationScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput">ModelSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput">OperationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput">RequestModelsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParametersInput">RequestParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput">RouteKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput">RouteResponseSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes">AuthorizationScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerId">AuthorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModels">RequestModels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParameters">RequestParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKey">RouteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression">RouteResponseSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RouteId`<sup>Required</sup> <a name="RouteId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeId"></a>

```csharp
public string RouteId { get; }
```

- *Type:* string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `ApiKeyRequiredInput`<sup>Optional</sup> <a name="ApiKeyRequiredInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput"></a>

```csharp
public bool|IResolvable ApiKeyRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthorizationScopesInput`<sup>Optional</sup> <a name="AuthorizationScopesInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput"></a>

```csharp
public string[] AuthorizationScopesInput { get; }
```

- *Type:* string[]

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput"></a>

```csharp
public string AuthorizationTypeInput { get; }
```

- *Type:* string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput"></a>

```csharp
public string AuthorizerIdInput { get; }
```

- *Type:* string

---

##### `ModelSelectionExpressionInput`<sup>Optional</sup> <a name="ModelSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput"></a>

```csharp
public string ModelSelectionExpressionInput { get; }
```

- *Type:* string

---

##### `OperationNameInput`<sup>Optional</sup> <a name="OperationNameInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput"></a>

```csharp
public string OperationNameInput { get; }
```

- *Type:* string

---

##### `RequestModelsInput`<sup>Optional</sup> <a name="RequestModelsInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput"></a>

```csharp
public string RequestModelsInput { get; }
```

- *Type:* string

---

##### `RequestParametersInput`<sup>Optional</sup> <a name="RequestParametersInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParametersInput"></a>

```csharp
public string RequestParametersInput { get; }
```

- *Type:* string

---

##### `RouteKeyInput`<sup>Optional</sup> <a name="RouteKeyInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput"></a>

```csharp
public string RouteKeyInput { get; }
```

- *Type:* string

---

##### `RouteResponseSelectionExpressionInput`<sup>Optional</sup> <a name="RouteResponseSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput"></a>

```csharp
public string RouteResponseSelectionExpressionInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `ApiKeyRequired`<sup>Required</sup> <a name="ApiKeyRequired" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired"></a>

```csharp
public bool|IResolvable ApiKeyRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthorizationScopes`<sup>Required</sup> <a name="AuthorizationScopes" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes"></a>

```csharp
public string[] AuthorizationScopes { get; }
```

- *Type:* string[]

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerId"></a>

```csharp
public string AuthorizerId { get; }
```

- *Type:* string

---

##### `ModelSelectionExpression`<sup>Required</sup> <a name="ModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression"></a>

```csharp
public string ModelSelectionExpression { get; }
```

- *Type:* string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `RequestModels`<sup>Required</sup> <a name="RequestModels" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModels"></a>

```csharp
public string RequestModels { get; }
```

- *Type:* string

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParameters"></a>

```csharp
public string RequestParameters { get; }
```

- *Type:* string

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKey"></a>

```csharp
public string RouteKey { get; }
```

- *Type:* string

---

##### `RouteResponseSelectionExpression`<sup>Required</sup> <a name="RouteResponseSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression"></a>

```csharp
public string RouteResponseSelectionExpression { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteConfig <a name="Apigatewayv2RouteConfig" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2RouteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiId,
    string RouteKey,
    bool|IResolvable ApiKeyRequired = null,
    string[] AuthorizationScopes = null,
    string AuthorizationType = null,
    string AuthorizerId = null,
    string ModelSelectionExpression = null,
    string OperationName = null,
    string RequestModels = null,
    string RequestParameters = null,
    string RouteResponseSelectionExpression = null,
    string Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId">ApiId</a></code> | <code>string</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey">RouteKey</a></code> | <code>string</code> | The route key for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether an API key is required for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes">AuthorizationScopes</a></code> | <code>string[]</code> | The authorization scopes supported by this route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | The authorization type for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId">AuthorizerId</a></code> | <code>string</code> | The identifier of the ``Authorizer`` resource to be associated with this route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>string</code> | The model selection expression for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName">OperationName</a></code> | <code>string</code> | The operation name for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels">RequestModels</a></code> | <code>string</code> | The request models for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameters">RequestParameters</a></code> | <code>string</code> | The request parameters for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression">RouteResponseSelectionExpression</a></code> | <code>string</code> | The route response selection expression for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.target">Target</a></code> | <code>string</code> | The target for the route. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#api_id Apigatewayv2Route#api_id}

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey"></a>

```csharp
public string RouteKey { get; set; }
```

- *Type:* string

The route key for the route.

For HTTP APIs, the route key can be either `$default`, or a combination of an HTTP method and resource path, for example, `GET /pets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#route_key Apigatewayv2Route#route_key}

---

##### `ApiKeyRequired`<sup>Optional</sup> <a name="ApiKeyRequired" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired"></a>

```csharp
public bool|IResolvable ApiKeyRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether an API key is required for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}

---

##### `AuthorizationScopes`<sup>Optional</sup> <a name="AuthorizationScopes" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes"></a>

```csharp
public string[] AuthorizationScopes { get; set; }
```

- *Type:* string[]

The authorization scopes supported by this route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; set; }
```

- *Type:* string

The authorization type for the route.

For WebSocket APIs, valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer. For HTTP APIs, valid values are `NONE` for open access, `JWT` for using JSON Web Tokens, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId"></a>

```csharp
public string AuthorizerId { get; set; }
```

- *Type:* string

The identifier of the ``Authorizer`` resource to be associated with this route.

The authorizer identifier is generated by API Gateway when you created the authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}

---

##### `ModelSelectionExpression`<sup>Optional</sup> <a name="ModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression"></a>

```csharp
public string ModelSelectionExpression { get; set; }
```

- *Type:* string

The model selection expression for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}

---

##### `OperationName`<sup>Optional</sup> <a name="OperationName" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName"></a>

```csharp
public string OperationName { get; set; }
```

- *Type:* string

The operation name for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}

---

##### `RequestModels`<sup>Optional</sup> <a name="RequestModels" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels"></a>

```csharp
public string RequestModels { get; set; }
```

- *Type:* string

The request models for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#request_models Apigatewayv2Route#request_models}

---

##### `RequestParameters`<sup>Optional</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameters"></a>

```csharp
public string RequestParameters { get; set; }
```

- *Type:* string

The request parameters for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#request_parameters Apigatewayv2Route#request_parameters}

---

##### `RouteResponseSelectionExpression`<sup>Optional</sup> <a name="RouteResponseSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression"></a>

```csharp
public string RouteResponseSelectionExpression { get; set; }
```

- *Type:* string

The route response selection expression for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

The target for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#target Apigatewayv2Route#target}

---



