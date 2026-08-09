# `cognitoUserPoolUiCustomizationAttachment` Submodule <a name="`cognitoUserPoolUiCustomizationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolUiCustomizationAttachment <a name="CognitoUserPoolUiCustomizationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_ui_customization_attachment awscc_cognito_user_pool_ui_customization_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolUiCustomizationAttachment(Construct Scope, string Id, CognitoUserPoolUiCustomizationAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig">CognitoUserPoolUiCustomizationAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig">CognitoUserPoolUiCustomizationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.resetCss">ResetCss</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCss` <a name="ResetCss" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.resetCss"></a>

```csharp
private void ResetCss()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolUiCustomizationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolUiCustomizationAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolUiCustomizationAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolUiCustomizationAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolUiCustomizationAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitoUserPoolUiCustomizationAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolUiCustomizationAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolUiCustomizationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_ui_customization_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolUiCustomizationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.cssInput">CssInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.css">Css</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `CssInput`<sup>Optional</sup> <a name="CssInput" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.cssInput"></a>

```csharp
public string CssInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.css"></a>

```csharp
public string Css { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolUiCustomizationAttachmentConfig <a name="CognitoUserPoolUiCustomizationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolUiCustomizationAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClientId,
    string UserPoolId,
    string Css = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_ui_customization_attachment#client_id CognitoUserPoolUiCustomizationAttachment#client_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_ui_customization_attachment#user_pool_id CognitoUserPoolUiCustomizationAttachment#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.css">Css</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_ui_customization_attachment#css CognitoUserPoolUiCustomizationAttachment#css}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_ui_customization_attachment#client_id CognitoUserPoolUiCustomizationAttachment#client_id}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_ui_customization_attachment#user_pool_id CognitoUserPoolUiCustomizationAttachment#user_pool_id}.

---

##### `Css`<sup>Optional</sup> <a name="Css" id="@cdktn/provider-awscc.cognitoUserPoolUiCustomizationAttachment.CognitoUserPoolUiCustomizationAttachmentConfig.property.css"></a>

```csharp
public string Css { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_ui_customization_attachment#css CognitoUserPoolUiCustomizationAttachment#css}.

---



