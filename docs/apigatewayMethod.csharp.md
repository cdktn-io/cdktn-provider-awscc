# `apigatewayMethod` Submodule <a name="`apigatewayMethod` Submodule" id="@cdktn/provider-awscc.apigatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayMethod <a name="ApigatewayMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method awscc_apigateway_method}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayMethod(Construct Scope, string Id, ApigatewayMethodConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig">ApigatewayMethodConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig">ApigatewayMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration">PutIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses">PutMethodResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetApiKeyRequired">ResetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationScopes">ResetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetIntegration">ResetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetMethodResponses">ResetMethodResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOperationName">ResetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestModels">ResetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestParameters">ResetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestValidatorId">ResetRequestValidatorId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIntegration` <a name="PutIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration"></a>

```csharp
private void PutIntegration(ApigatewayMethodIntegration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---

##### `PutMethodResponses` <a name="PutMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses"></a>

```csharp
private void PutMethodResponses(IResolvable|ApigatewayMethodMethodResponses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]

---

##### `ResetApiKeyRequired` <a name="ResetApiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetApiKeyRequired"></a>

```csharp
private void ResetApiKeyRequired()
```

##### `ResetAuthorizationScopes` <a name="ResetAuthorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationScopes"></a>

```csharp
private void ResetAuthorizationScopes()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationType"></a>

```csharp
private void ResetAuthorizationType()
```

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizerId"></a>

```csharp
private void ResetAuthorizerId()
```

##### `ResetIntegration` <a name="ResetIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetIntegration"></a>

```csharp
private void ResetIntegration()
```

##### `ResetMethodResponses` <a name="ResetMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetMethodResponses"></a>

```csharp
private void ResetMethodResponses()
```

##### `ResetOperationName` <a name="ResetOperationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOperationName"></a>

```csharp
private void ResetOperationName()
```

##### `ResetRequestModels` <a name="ResetRequestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestModels"></a>

```csharp
private void ResetRequestModels()
```

##### `ResetRequestParameters` <a name="ResetRequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestParameters"></a>

```csharp
private void ResetRequestParameters()
```

##### `ResetRequestValidatorId` <a name="ResetRequestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestValidatorId"></a>

```csharp
private void ResetRequestValidatorId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayMethod resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayMethod.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayMethod.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayMethod.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayMethod.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigatewayMethod resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayMethod to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integration">Integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference">ApigatewayMethodIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponses">MethodResponses</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList">ApigatewayMethodMethodResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequiredInput">ApiKeyRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopesInput">AuthorizationScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integrationInput">IntegrationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponsesInput">MethodResponsesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationNameInput">OperationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModelsInput">RequestModelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParametersInput">RequestParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, bool\|Io.Cdktn.IResolvable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorIdInput">RequestValidatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopes">AuthorizationScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerId">AuthorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModels">RequestModels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParameters">RequestParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, bool\|Io.Cdktn.IResolvable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorId">RequestValidatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integration"></a>

```csharp
public ApigatewayMethodIntegrationOutputReference Integration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference">ApigatewayMethodIntegrationOutputReference</a>

---

##### `MethodResponses`<sup>Required</sup> <a name="MethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponses"></a>

```csharp
public ApigatewayMethodMethodResponsesList MethodResponses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList">ApigatewayMethodMethodResponsesList</a>

---

##### `ApiKeyRequiredInput`<sup>Optional</sup> <a name="ApiKeyRequiredInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequiredInput"></a>

```csharp
public bool|IResolvable ApiKeyRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthorizationScopesInput`<sup>Optional</sup> <a name="AuthorizationScopesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopesInput"></a>

```csharp
public string[] AuthorizationScopesInput { get; }
```

- *Type:* string[]

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationTypeInput"></a>

```csharp
public string AuthorizationTypeInput { get; }
```

- *Type:* string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerIdInput"></a>

```csharp
public string AuthorizerIdInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `IntegrationInput`<sup>Optional</sup> <a name="IntegrationInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integrationInput"></a>

```csharp
public IResolvable|ApigatewayMethodIntegration IntegrationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---

##### `MethodResponsesInput`<sup>Optional</sup> <a name="MethodResponsesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponsesInput"></a>

```csharp
public IResolvable|ApigatewayMethodMethodResponses[] MethodResponsesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]

---

##### `OperationNameInput`<sup>Optional</sup> <a name="OperationNameInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationNameInput"></a>

```csharp
public string OperationNameInput { get; }
```

- *Type:* string

---

##### `RequestModelsInput`<sup>Optional</sup> <a name="RequestModelsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestModelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestParametersInput`<sup>Optional</sup> <a name="RequestParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, bool|IResolvable> RequestParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, bool|Io.Cdktn.IResolvable>

---

##### `RequestValidatorIdInput`<sup>Optional</sup> <a name="RequestValidatorIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorIdInput"></a>

```csharp
public string RequestValidatorIdInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `ApiKeyRequired`<sup>Required</sup> <a name="ApiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequired"></a>

```csharp
public bool|IResolvable ApiKeyRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthorizationScopes`<sup>Required</sup> <a name="AuthorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopes"></a>

```csharp
public string[] AuthorizationScopes { get; }
```

- *Type:* string[]

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerId"></a>

```csharp
public string AuthorizerId { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `RequestModels`<sup>Required</sup> <a name="RequestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestModels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, bool|IResolvable> RequestParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, bool|Io.Cdktn.IResolvable>

---

##### `RequestValidatorId`<sup>Required</sup> <a name="RequestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorId"></a>

```csharp
public string RequestValidatorId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayMethodConfig <a name="ApigatewayMethodConfig" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayMethodConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string HttpMethod,
    string ResourceId,
    string RestApiId,
    bool|IResolvable ApiKeyRequired = null,
    string[] AuthorizationScopes = null,
    string AuthorizationType = null,
    string AuthorizerId = null,
    ApigatewayMethodIntegration Integration = null,
    IResolvable|ApigatewayMethodMethodResponses[] MethodResponses = null,
    string OperationName = null,
    System.Collections.Generic.IDictionary<string, string> RequestModels = null,
    System.Collections.Generic.IDictionary<string, bool|IResolvable> RequestParameters = null,
    string RequestValidatorId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationScopes">AuthorizationScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | The method's authorization type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizerId">AuthorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.integration">Integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.methodResponses">MethodResponses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.operationName">OperationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestModels">RequestModels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestParameters">RequestParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, bool\|Io.Cdktn.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestValidatorId">RequestValidatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}.

---

##### `ApiKeyRequired`<sup>Optional</sup> <a name="ApiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.apiKeyRequired"></a>

```csharp
public bool|IResolvable ApiKeyRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}.

---

##### `AuthorizationScopes`<sup>Optional</sup> <a name="AuthorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationScopes"></a>

```csharp
public string[] AuthorizationScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}.

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; set; }
```

- *Type:* string

The method's authorization type.

This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
If you specify the `AuthorizerId` property, specify `CUSTOM` or `COGNITO_USER_POOLS` for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#authorization_type ApigatewayMethod#authorization_type}

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizerId"></a>

```csharp
public string AuthorizerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}.

---

##### `Integration`<sup>Optional</sup> <a name="Integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.integration"></a>

```csharp
public ApigatewayMethodIntegration Integration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration ApigatewayMethod#integration}

---

##### `MethodResponses`<sup>Optional</sup> <a name="MethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.methodResponses"></a>

```csharp
public IResolvable|ApigatewayMethodMethodResponses[] MethodResponses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}.

---

##### `OperationName`<sup>Optional</sup> <a name="OperationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.operationName"></a>

```csharp
public string OperationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}.

---

##### `RequestModels`<sup>Optional</sup> <a name="RequestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestModels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestModels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}.

---

##### `RequestParameters`<sup>Optional</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, bool|IResolvable> RequestParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, bool|Io.Cdktn.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `RequestValidatorId`<sup>Optional</sup> <a name="RequestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestValidatorId"></a>

```csharp
public string RequestValidatorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}.

---

### ApigatewayMethodIntegration <a name="ApigatewayMethodIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayMethodIntegration {
    string[] CacheKeyParameters = null,
    string CacheNamespace = null,
    string ConnectionId = null,
    string ConnectionType = null,
    string ContentHandling = null,
    string Credentials = null,
    string IntegrationHttpMethod = null,
    IResolvable|ApigatewayMethodIntegrationIntegrationResponses[] IntegrationResponses = null,
    string IntegrationTarget = null,
    string PassthroughBehavior = null,
    System.Collections.Generic.IDictionary<string, string> RequestParameters = null,
    System.Collections.Generic.IDictionary<string, string> RequestTemplates = null,
    string ResponseTransferMode = null,
    double TimeoutInMillis = null,
    string Type = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheKeyParameters">CacheKeyParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheNamespace">CacheNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionId">ConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionType">ConnectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.contentHandling">ContentHandling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.credentials">Credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationHttpMethod">IntegrationHttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationResponses">IntegrationResponses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationTarget">IntegrationTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.passthroughBehavior">PassthroughBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestParameters">RequestParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestTemplates">RequestTemplates</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.responseTransferMode">ResponseTransferMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#type ApigatewayMethod#type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}. |

---

##### `CacheKeyParameters`<sup>Optional</sup> <a name="CacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheKeyParameters"></a>

```csharp
public string[] CacheKeyParameters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}.

---

##### `CacheNamespace`<sup>Optional</sup> <a name="CacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheNamespace"></a>

```csharp
public string CacheNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}.

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}.

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}.

---

##### `ContentHandling`<sup>Optional</sup> <a name="ContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.contentHandling"></a>

```csharp
public string ContentHandling { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}.

---

##### `IntegrationHttpMethod`<sup>Optional</sup> <a name="IntegrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationHttpMethod"></a>

```csharp
public string IntegrationHttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}.

---

##### `IntegrationResponses`<sup>Optional</sup> <a name="IntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationResponses"></a>

```csharp
public IResolvable|ApigatewayMethodIntegrationIntegrationResponses[] IntegrationResponses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}.

---

##### `IntegrationTarget`<sup>Optional</sup> <a name="IntegrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationTarget"></a>

```csharp
public string IntegrationTarget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}.

---

##### `PassthroughBehavior`<sup>Optional</sup> <a name="PassthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.passthroughBehavior"></a>

```csharp
public string PassthroughBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}.

---

##### `RequestParameters`<sup>Optional</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `RequestTemplates`<sup>Optional</sup> <a name="RequestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestTemplates"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestTemplates { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}.

---

##### `ResponseTransferMode`<sup>Optional</sup> <a name="ResponseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.responseTransferMode"></a>

```csharp
public string ResponseTransferMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}.

---

##### `TimeoutInMillis`<sup>Optional</sup> <a name="TimeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.timeoutInMillis"></a>

```csharp
public double TimeoutInMillis { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#type ApigatewayMethod#type}.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}.

---

### ApigatewayMethodIntegrationIntegrationResponses <a name="ApigatewayMethodIntegrationIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayMethodIntegrationIntegrationResponses {
    string ContentHandling = null,
    System.Collections.Generic.IDictionary<string, string> ResponseParameters = null,
    System.Collections.Generic.IDictionary<string, string> ResponseTemplates = null,
    string SelectionPattern = null,
    string StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.contentHandling">ContentHandling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseParameters">ResponseParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseTemplates">ResponseTemplates</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_templates ApigatewayMethod#response_templates}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.selectionPattern">SelectionPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#selection_pattern ApigatewayMethod#selection_pattern}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.statusCode">StatusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}. |

---

##### `ContentHandling`<sup>Optional</sup> <a name="ContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.contentHandling"></a>

```csharp
public string ContentHandling { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

##### `ResponseParameters`<sup>Optional</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}.

---

##### `ResponseTemplates`<sup>Optional</sup> <a name="ResponseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseTemplates"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseTemplates { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_templates ApigatewayMethod#response_templates}.

---

##### `SelectionPattern`<sup>Optional</sup> <a name="SelectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.selectionPattern"></a>

```csharp
public string SelectionPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#selection_pattern ApigatewayMethod#selection_pattern}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}.

---

### ApigatewayMethodMethodResponses <a name="ApigatewayMethodMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayMethodMethodResponses {
    System.Collections.Generic.IDictionary<string, string> ResponseModels = null,
    System.Collections.Generic.IDictionary<string, bool|IResolvable> ResponseParameters = null,
    string StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseModels">ResponseModels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_models ApigatewayMethod#response_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseParameters">ResponseParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, bool\|Io.Cdktn.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.statusCode">StatusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}. |

---

##### `ResponseModels`<sup>Optional</sup> <a name="ResponseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseModels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseModels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_models ApigatewayMethod#response_models}.

---

##### `ResponseParameters`<sup>Optional</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, bool|IResolvable> ResponseParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, bool|Io.Cdktn.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayMethodIntegrationIntegrationResponsesList <a name="ApigatewayMethodIntegrationIntegrationResponsesList" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayMethodIntegrationIntegrationResponsesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get"></a>

```csharp
private ApigatewayMethodIntegrationIntegrationResponsesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayMethodIntegrationIntegrationResponses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]

---


### ApigatewayMethodIntegrationIntegrationResponsesOutputReference <a name="ApigatewayMethodIntegrationIntegrationResponsesOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayMethodIntegrationIntegrationResponsesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetContentHandling">ResetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseParameters">ResetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseTemplates">ResetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetSelectionPattern">ResetSelectionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentHandling` <a name="ResetContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetContentHandling"></a>

```csharp
private void ResetContentHandling()
```

##### `ResetResponseParameters` <a name="ResetResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseParameters"></a>

```csharp
private void ResetResponseParameters()
```

##### `ResetResponseTemplates` <a name="ResetResponseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseTemplates"></a>

```csharp
private void ResetResponseTemplates()
```

##### `ResetSelectionPattern` <a name="ResetSelectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetSelectionPattern"></a>

```csharp
private void ResetSelectionPattern()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandlingInput">ContentHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParametersInput">ResponseParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplatesInput">ResponseTemplatesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPatternInput">SelectionPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling">ContentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters">ResponseParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates">ResponseTemplates</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern">SelectionPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentHandlingInput`<sup>Optional</sup> <a name="ContentHandlingInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandlingInput"></a>

```csharp
public string ContentHandlingInput { get; }
```

- *Type:* string

---

##### `ResponseParametersInput`<sup>Optional</sup> <a name="ResponseParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseTemplatesInput`<sup>Optional</sup> <a name="ResponseTemplatesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplatesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseTemplatesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SelectionPatternInput`<sup>Optional</sup> <a name="SelectionPatternInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPatternInput"></a>

```csharp
public string SelectionPatternInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `ContentHandling`<sup>Required</sup> <a name="ContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling"></a>

```csharp
public string ContentHandling { get; }
```

- *Type:* string

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseTemplates`<sup>Required</sup> <a name="ResponseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseTemplates { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SelectionPattern`<sup>Required</sup> <a name="SelectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern"></a>

```csharp
public string SelectionPattern { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayMethodIntegrationIntegrationResponses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>

---


### ApigatewayMethodIntegrationOutputReference <a name="ApigatewayMethodIntegrationOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayMethodIntegrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses">PutIntegrationResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheKeyParameters">ResetCacheKeyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheNamespace">ResetCacheNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetContentHandling">ResetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationHttpMethod">ResetIntegrationHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationResponses">ResetIntegrationResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationTarget">ResetIntegrationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetPassthroughBehavior">ResetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestParameters">ResetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestTemplates">ResetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetResponseTransferMode">ResetResponseTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetTimeoutInMillis">ResetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIntegrationResponses` <a name="PutIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses"></a>

```csharp
private void PutIntegrationResponses(IResolvable|ApigatewayMethodIntegrationIntegrationResponses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]

---

##### `ResetCacheKeyParameters` <a name="ResetCacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheKeyParameters"></a>

```csharp
private void ResetCacheKeyParameters()
```

##### `ResetCacheNamespace` <a name="ResetCacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheNamespace"></a>

```csharp
private void ResetCacheNamespace()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionId"></a>

```csharp
private void ResetConnectionId()
```

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionType"></a>

```csharp
private void ResetConnectionType()
```

##### `ResetContentHandling` <a name="ResetContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetContentHandling"></a>

```csharp
private void ResetContentHandling()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetIntegrationHttpMethod` <a name="ResetIntegrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationHttpMethod"></a>

```csharp
private void ResetIntegrationHttpMethod()
```

##### `ResetIntegrationResponses` <a name="ResetIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationResponses"></a>

```csharp
private void ResetIntegrationResponses()
```

##### `ResetIntegrationTarget` <a name="ResetIntegrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationTarget"></a>

```csharp
private void ResetIntegrationTarget()
```

##### `ResetPassthroughBehavior` <a name="ResetPassthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetPassthroughBehavior"></a>

```csharp
private void ResetPassthroughBehavior()
```

##### `ResetRequestParameters` <a name="ResetRequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestParameters"></a>

```csharp
private void ResetRequestParameters()
```

##### `ResetRequestTemplates` <a name="ResetRequestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestTemplates"></a>

```csharp
private void ResetRequestTemplates()
```

##### `ResetResponseTransferMode` <a name="ResetResponseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetResponseTransferMode"></a>

```csharp
private void ResetResponseTransferMode()
```

##### `ResetTimeoutInMillis` <a name="ResetTimeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetTimeoutInMillis"></a>

```csharp
private void ResetTimeoutInMillis()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponses">IntegrationResponses</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList">ApigatewayMethodIntegrationIntegrationResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParametersInput">CacheKeyParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespaceInput">CacheNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandlingInput">ContentHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethodInput">IntegrationHttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponsesInput">IntegrationResponsesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTargetInput">IntegrationTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehaviorInput">PassthroughBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParametersInput">RequestParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplatesInput">RequestTemplatesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferModeInput">ResponseTransferModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillisInput">TimeoutInMillisInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters">CacheKeyParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespace">CacheNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandling">ContentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod">IntegrationHttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTarget">IntegrationTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehavior">PassthroughBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParameters">RequestParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplates">RequestTemplates</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferMode">ResponseTransferMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntegrationResponses`<sup>Required</sup> <a name="IntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponses"></a>

```csharp
public ApigatewayMethodIntegrationIntegrationResponsesList IntegrationResponses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList">ApigatewayMethodIntegrationIntegrationResponsesList</a>

---

##### `CacheKeyParametersInput`<sup>Optional</sup> <a name="CacheKeyParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParametersInput"></a>

```csharp
public string[] CacheKeyParametersInput { get; }
```

- *Type:* string[]

---

##### `CacheNamespaceInput`<sup>Optional</sup> <a name="CacheNamespaceInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespaceInput"></a>

```csharp
public string CacheNamespaceInput { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `ContentHandlingInput`<sup>Optional</sup> <a name="ContentHandlingInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandlingInput"></a>

```csharp
public string ContentHandlingInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `IntegrationHttpMethodInput`<sup>Optional</sup> <a name="IntegrationHttpMethodInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethodInput"></a>

```csharp
public string IntegrationHttpMethodInput { get; }
```

- *Type:* string

---

##### `IntegrationResponsesInput`<sup>Optional</sup> <a name="IntegrationResponsesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponsesInput"></a>

```csharp
public IResolvable|ApigatewayMethodIntegrationIntegrationResponses[] IntegrationResponsesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]

---

##### `IntegrationTargetInput`<sup>Optional</sup> <a name="IntegrationTargetInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTargetInput"></a>

```csharp
public string IntegrationTargetInput { get; }
```

- *Type:* string

---

##### `PassthroughBehaviorInput`<sup>Optional</sup> <a name="PassthroughBehaviorInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehaviorInput"></a>

```csharp
public string PassthroughBehaviorInput { get; }
```

- *Type:* string

---

##### `RequestParametersInput`<sup>Optional</sup> <a name="RequestParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestTemplatesInput`<sup>Optional</sup> <a name="RequestTemplatesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplatesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestTemplatesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseTransferModeInput`<sup>Optional</sup> <a name="ResponseTransferModeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferModeInput"></a>

```csharp
public string ResponseTransferModeInput { get; }
```

- *Type:* string

---

##### `TimeoutInMillisInput`<sup>Optional</sup> <a name="TimeoutInMillisInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillisInput"></a>

```csharp
public double TimeoutInMillisInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `CacheKeyParameters`<sup>Required</sup> <a name="CacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters"></a>

```csharp
public string[] CacheKeyParameters { get; }
```

- *Type:* string[]

---

##### `CacheNamespace`<sup>Required</sup> <a name="CacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespace"></a>

```csharp
public string CacheNamespace { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `ContentHandling`<sup>Required</sup> <a name="ContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandling"></a>

```csharp
public string ContentHandling { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `IntegrationHttpMethod`<sup>Required</sup> <a name="IntegrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod"></a>

```csharp
public string IntegrationHttpMethod { get; }
```

- *Type:* string

---

##### `IntegrationTarget`<sup>Required</sup> <a name="IntegrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTarget"></a>

```csharp
public string IntegrationTarget { get; }
```

- *Type:* string

---

##### `PassthroughBehavior`<sup>Required</sup> <a name="PassthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehavior"></a>

```csharp
public string PassthroughBehavior { get; }
```

- *Type:* string

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestTemplates`<sup>Required</sup> <a name="RequestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplates"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestTemplates { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseTransferMode`<sup>Required</sup> <a name="ResponseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferMode"></a>

```csharp
public string ResponseTransferMode { get; }
```

- *Type:* string

---

##### `TimeoutInMillis`<sup>Required</sup> <a name="TimeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillis"></a>

```csharp
public double TimeoutInMillis { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayMethodIntegration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---


### ApigatewayMethodMethodResponsesList <a name="ApigatewayMethodMethodResponsesList" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayMethodMethodResponsesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get"></a>

```csharp
private ApigatewayMethodMethodResponsesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayMethodMethodResponses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]

---


### ApigatewayMethodMethodResponsesOutputReference <a name="ApigatewayMethodMethodResponsesOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayMethodMethodResponsesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseModels">ResetResponseModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseParameters">ResetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResponseModels` <a name="ResetResponseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseModels"></a>

```csharp
private void ResetResponseModels()
```

##### `ResetResponseParameters` <a name="ResetResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseParameters"></a>

```csharp
private void ResetResponseParameters()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModelsInput">ResponseModelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParametersInput">ResponseParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, bool\|Io.Cdktn.IResolvable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModels">ResponseModels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParameters">ResponseParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, bool\|Io.Cdktn.IResolvable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResponseModelsInput`<sup>Optional</sup> <a name="ResponseModelsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseModelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseParametersInput`<sup>Optional</sup> <a name="ResponseParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, bool|IResolvable> ResponseParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, bool|Io.Cdktn.IResolvable>

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `ResponseModels`<sup>Required</sup> <a name="ResponseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseModels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, bool|IResolvable> ResponseParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, bool|Io.Cdktn.IResolvable>

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayMethodMethodResponses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>

---



