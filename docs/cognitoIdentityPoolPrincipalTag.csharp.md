# `cognitoIdentityPoolPrincipalTag` Submodule <a name="`cognitoIdentityPoolPrincipalTag` Submodule" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolPrincipalTag <a name="CognitoIdentityPoolPrincipalTag" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag awscc_cognito_identity_pool_principal_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolPrincipalTag(Construct Scope, string Id, CognitoIdentityPoolPrincipalTagConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig">CognitoIdentityPoolPrincipalTagConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig">CognitoIdentityPoolPrincipalTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetPrincipalTags">ResetPrincipalTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetUseDefaults">ResetUseDefaults</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetPrincipalTags` <a name="ResetPrincipalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetPrincipalTags"></a>

```csharp
private void ResetPrincipalTags()
```

##### `ResetUseDefaults` <a name="ResetUseDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetUseDefaults"></a>

```csharp
private void ResetUseDefaults()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoIdentityPoolPrincipalTag resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoIdentityPoolPrincipalTag.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoIdentityPoolPrincipalTag.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoIdentityPoolPrincipalTag.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoIdentityPoolPrincipalTag.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitoIdentityPoolPrincipalTag resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoIdentityPoolPrincipalTag to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoIdentityPoolPrincipalTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPoolPrincipalTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderNameInput">IdentityProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTagsInput">PrincipalTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaultsInput">UseDefaultsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderName">IdentityProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTags">PrincipalTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaults">UseDefaults</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolIdInput"></a>

```csharp
public string IdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `IdentityProviderNameInput`<sup>Optional</sup> <a name="IdentityProviderNameInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderNameInput"></a>

```csharp
public string IdentityProviderNameInput { get; }
```

- *Type:* string

---

##### `PrincipalTagsInput`<sup>Optional</sup> <a name="PrincipalTagsInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTagsInput"></a>

```csharp
public string PrincipalTagsInput { get; }
```

- *Type:* string

---

##### `UseDefaultsInput`<sup>Optional</sup> <a name="UseDefaultsInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaultsInput"></a>

```csharp
public bool|IResolvable UseDefaultsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `IdentityProviderName`<sup>Required</sup> <a name="IdentityProviderName" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderName"></a>

```csharp
public string IdentityProviderName { get; }
```

- *Type:* string

---

##### `PrincipalTags`<sup>Required</sup> <a name="PrincipalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTags"></a>

```csharp
public string PrincipalTags { get; }
```

- *Type:* string

---

##### `UseDefaults`<sup>Required</sup> <a name="UseDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaults"></a>

```csharp
public bool|IResolvable UseDefaults { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolPrincipalTagConfig <a name="CognitoIdentityPoolPrincipalTagConfig" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolPrincipalTagConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IdentityPoolId,
    string IdentityProviderName,
    string PrincipalTags = null,
    bool|IResolvable UseDefaults = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CognitoIdentityPoolPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityProviderName">IdentityProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CognitoIdentityPoolPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.principalTags">PrincipalTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#principal_tags CognitoIdentityPoolPrincipalTag#principal_tags}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.useDefaults">UseDefaults</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#use_defaults CognitoIdentityPoolPrincipalTag#use_defaults}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CognitoIdentityPoolPrincipalTag#identity_pool_id}.

---

##### `IdentityProviderName`<sup>Required</sup> <a name="IdentityProviderName" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityProviderName"></a>

```csharp
public string IdentityProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CognitoIdentityPoolPrincipalTag#identity_provider_name}.

---

##### `PrincipalTags`<sup>Optional</sup> <a name="PrincipalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.principalTags"></a>

```csharp
public string PrincipalTags { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#principal_tags CognitoIdentityPoolPrincipalTag#principal_tags}.

---

##### `UseDefaults`<sup>Optional</sup> <a name="UseDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.useDefaults"></a>

```csharp
public bool|IResolvable UseDefaults { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#use_defaults CognitoIdentityPoolPrincipalTag#use_defaults}.

---



