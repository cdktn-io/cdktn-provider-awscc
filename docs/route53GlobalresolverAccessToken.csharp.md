# `route53GlobalresolverAccessToken` Submodule <a name="`route53GlobalresolverAccessToken` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverAccessToken <a name="Route53GlobalresolverAccessToken" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token awscc_route53globalresolver_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverAccessToken(Construct Scope, string Id, Route53GlobalresolverAccessTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig">Route53GlobalresolverAccessTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig">Route53GlobalresolverAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53GlobalresolverAccessTokenTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>[]

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetClientToken"></a>

```csharp
private void ResetClientToken()
```

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetExpiresAt"></a>

```csharp
private void ResetExpiresAt()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverAccessToken resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverAccessToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverAccessToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverAccessToken.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverAccessToken.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53GlobalresolverAccessToken resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53GlobalresolverAccessToken to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53GlobalresolverAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.accessTokenId">AccessTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.globalResolverId">GlobalResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList">Route53GlobalresolverAccessTokenTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.clientTokenInput">ClientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dnsViewIdInput">DnsViewIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.expiresAtInput">ExpiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dnsViewId">DnsViewId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessTokenId`<sup>Required</sup> <a name="AccessTokenId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.accessTokenId"></a>

```csharp
public string AccessTokenId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `GlobalResolverId`<sup>Required</sup> <a name="GlobalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.globalResolverId"></a>

```csharp
public string GlobalResolverId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tags"></a>

```csharp
public Route53GlobalresolverAccessTokenTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList">Route53GlobalresolverAccessTokenTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.clientTokenInput"></a>

```csharp
public string ClientTokenInput { get; }
```

- *Type:* string

---

##### `DnsViewIdInput`<sup>Optional</sup> <a name="DnsViewIdInput" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dnsViewIdInput"></a>

```csharp
public string DnsViewIdInput { get; }
```

- *Type:* string

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.expiresAtInput"></a>

```csharp
public string ExpiresAtInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tagsInput"></a>

```csharp
public IResolvable|Route53GlobalresolverAccessTokenTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>[]

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `DnsViewId`<sup>Required</sup> <a name="DnsViewId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dnsViewId"></a>

```csharp
public string DnsViewId { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverAccessTokenConfig <a name="Route53GlobalresolverAccessTokenConfig" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverAccessTokenConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DnsViewId,
    string ClientToken = null,
    string ExpiresAt = null,
    string Name = null,
    IResolvable|Route53GlobalresolverAccessTokenTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.dnsViewId">DnsViewId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#dns_view_id Route53GlobalresolverAccessToken#dns_view_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.clientToken">ClientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#client_token Route53GlobalresolverAccessToken#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#expires_at Route53GlobalresolverAccessToken#expires_at}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#name Route53GlobalresolverAccessToken#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#tags Route53GlobalresolverAccessToken#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DnsViewId`<sup>Required</sup> <a name="DnsViewId" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.dnsViewId"></a>

```csharp
public string DnsViewId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#dns_view_id Route53GlobalresolverAccessToken#dns_view_id}.

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.clientToken"></a>

```csharp
public string ClientToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#client_token Route53GlobalresolverAccessToken#client_token}.

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#expires_at Route53GlobalresolverAccessToken#expires_at}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#name Route53GlobalresolverAccessToken#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.tags"></a>

```csharp
public IResolvable|Route53GlobalresolverAccessTokenTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#tags Route53GlobalresolverAccessToken#tags}.

---

### Route53GlobalresolverAccessTokenTags <a name="Route53GlobalresolverAccessTokenTags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverAccessTokenTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#key Route53GlobalresolverAccessToken#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#value Route53GlobalresolverAccessToken#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#key Route53GlobalresolverAccessToken#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_access_token#value Route53GlobalresolverAccessToken#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverAccessTokenTagsList <a name="Route53GlobalresolverAccessTokenTagsList" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverAccessTokenTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.get"></a>

```csharp
private Route53GlobalresolverAccessTokenTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53GlobalresolverAccessTokenTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>[]

---


### Route53GlobalresolverAccessTokenTagsOutputReference <a name="Route53GlobalresolverAccessTokenTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverAccessTokenTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53GlobalresolverAccessTokenTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>

---



