# `cognitoUserPoolClientSessionConfigurationAttachment` Submodule <a name="`cognitoUserPoolClientSessionConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolClientSessionConfigurationAttachment <a name="CognitoUserPoolClientSessionConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment awscc_cognito_user_pool_client_session_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientSessionConfigurationAttachment(Construct Scope, string Id, CognitoUserPoolClientSessionConfigurationAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig">CognitoUserPoolClientSessionConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig">CognitoUserPoolClientSessionConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.putSsoSession">PutSsoSession</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSsoSession` <a name="PutSsoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.putSsoSession"></a>

```csharp
private void PutSsoSession(CognitoUserPoolClientSessionConfigurationAttachmentSsoSession Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.putSsoSession.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolClientSessionConfigurationAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolClientSessionConfigurationAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolClientSessionConfigurationAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolClientSessionConfigurationAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolClientSessionConfigurationAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolClientSessionConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolClientSessionConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSession">SsoSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference">CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSessionInput">SsoSessionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SsoSession`<sup>Required</sup> <a name="SsoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSession"></a>

```csharp
public CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference SsoSession { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference">CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `SsoSessionInput`<sup>Optional</sup> <a name="SsoSessionInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSessionInput"></a>

```csharp
public IResolvable|CognitoUserPoolClientSessionConfigurationAttachmentSsoSession SsoSessionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolClientSessionConfigurationAttachmentConfig <a name="CognitoUserPoolClientSessionConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientSessionConfigurationAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClientId,
    CognitoUserPoolClientSessionConfigurationAttachmentSsoSession SsoSession,
    string UserPoolId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.clientId">ClientId</a></code> | <code>string</code> | The ID of the app client. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.ssoSession">SsoSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | Managed login single sign-on session settings for the app client. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | The ID of the user pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The ID of the app client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#client_id CognitoUserPoolClientSessionConfigurationAttachment#client_id}

---

##### `SsoSession`<sup>Required</sup> <a name="SsoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.ssoSession"></a>

```csharp
public CognitoUserPoolClientSessionConfigurationAttachmentSsoSession SsoSession { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

Managed login single sign-on session settings for the app client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#sso_session CognitoUserPoolClientSessionConfigurationAttachment#sso_session}

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

The ID of the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#user_pool_id CognitoUserPoolClientSessionConfigurationAttachment#user_pool_id}

---

### CognitoUserPoolClientSessionConfigurationAttachmentSsoSession <a name="CognitoUserPoolClientSessionConfigurationAttachmentSsoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientSessionConfigurationAttachmentSsoSession {
    double MaxValidityMinutes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession.property.maxValidityMinutes">MaxValidityMinutes</a></code> | <code>double</code> | The maximum time in minutes since the last authentication during which this app client can reuse an existing managed login SSO session without asking the user to sign in again. |

---

##### `MaxValidityMinutes`<sup>Required</sup> <a name="MaxValidityMinutes" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession.property.maxValidityMinutes"></a>

```csharp
public double MaxValidityMinutes { get; set; }
```

- *Type:* double

The maximum time in minutes since the last authentication during which this app client can reuse an existing managed login SSO session without asking the user to sign in again.

0 means the app client always asks the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#max_validity_minutes CognitoUserPoolClientSessionConfigurationAttachment#max_validity_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference <a name="CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutesInput">MaxValidityMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutes">MaxValidityMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxValidityMinutesInput`<sup>Optional</sup> <a name="MaxValidityMinutesInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutesInput"></a>

```csharp
public double MaxValidityMinutesInput { get; }
```

- *Type:* double

---

##### `MaxValidityMinutes`<sup>Required</sup> <a name="MaxValidityMinutes" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutes"></a>

```csharp
public double MaxValidityMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolClientSessionConfigurationAttachmentSsoSession InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---



