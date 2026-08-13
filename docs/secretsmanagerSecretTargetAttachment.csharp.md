# `secretsmanagerSecretTargetAttachment` Submodule <a name="`secretsmanagerSecretTargetAttachment` Submodule" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretTargetAttachment <a name="SecretsmanagerSecretTargetAttachment" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_secret_target_attachment awscc_secretsmanager_secret_target_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretTargetAttachment(Construct Scope, string Id, SecretsmanagerSecretTargetAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig">SecretsmanagerSecretTargetAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig">SecretsmanagerSecretTargetAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsmanagerSecretTargetAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerSecretTargetAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerSecretTargetAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerSecretTargetAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerSecretTargetAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecretsmanagerSecretTargetAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsmanagerSecretTargetAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsmanagerSecretTargetAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_secret_target_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecretTargetAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretTargetAttachmentId">SecretTargetAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecretTargetAttachmentId`<sup>Required</sup> <a name="SecretTargetAttachmentId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretTargetAttachmentId"></a>

```csharp
public string SecretTargetAttachmentId { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretTargetAttachmentConfig <a name="SecretsmanagerSecretTargetAttachmentConfig" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretTargetAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SecretId,
    string TargetId,
    string TargetType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_secret_target_attachment#secret_id SecretsmanagerSecretTargetAttachment#secret_id}. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_secret_target_attachment#target_id SecretsmanagerSecretTargetAttachment#target_id}. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.targetType">TargetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_secret_target_attachment#target_type SecretsmanagerSecretTargetAttachment#target_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_secret_target_attachment#secret_id SecretsmanagerSecretTargetAttachment#secret_id}.

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_secret_target_attachment#target_id SecretsmanagerSecretTargetAttachment#target_id}.

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_secret_target_attachment#target_type SecretsmanagerSecretTargetAttachment#target_type}.

---



